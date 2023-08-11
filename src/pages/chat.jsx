import NavBar from "../components/nav";
import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const Chat = ({ userData }) => {
  const handelsubmit = async (event) => {
    event.preventDefault();
    let massageBox = document.getElementById("inputBox");
    let messageText = massageBox.value;
    massageBox.value = "";
    if (messageText.trim() != "") {
      await addDoc(collection(db, "messages"), {
        text: messageText,
        photo: userData.photoURL,
        timestamp: new Date(),
      });
    }
  };

  const q = query(collection(db, "messages"), orderBy("timestamp"));
  onSnapshot(q, (snapshot) => {
    let chatMessages = document.getElementById("massages");
    chatMessages.innerHTML = "";
    snapshot.forEach((doc) => {
      const message = doc.data();
      const mainMessageDiv = document.createElement("div");
      const userPhoto = document.createElement("img");
      userPhoto.src = userData.photoURL;
      chatMessages.appendChild(userPhoto);
      mainMessageDiv.textContent = message.text;
      chatMessages.appendChild(mainMessageDiv);
    });
  });

  return (
    <>
      <NavBar userData={userData} />
      <div id="massages"></div>
      <form onSubmit={handelsubmit}>
        <input
          type="text"
          name="massageBox"
          id="inputBox"
          className="text-slate-950"
        />
        <button type="submit" className="bg-slate-300 text-slate-950 p-1 m-1">
          Submit
        </button>
      </form>
    </>
  );
};

export default Chat;
