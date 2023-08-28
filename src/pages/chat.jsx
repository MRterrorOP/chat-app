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
        name: userData.displayName,
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
      mainMessageDiv.classList.add(
        message.name == userData.displayName,
        "flex",
        "m-10"
      );

      const userPhoto = document.createElement("img");
      userPhoto.src = message.photo;
      mainMessageDiv.appendChild(userPhoto);

      const userNameAndMassage = document.createElement("div");

      const massageText = document.createElement("p");
      massageText.innerText = message.text;
      userNameAndMassage.appendChild(massageText);

      const userName = document.createElement("h5");
      userName.innerText = message.name;
      userNameAndMassage.appendChild(userName);

      mainMessageDiv.appendChild(userNameAndMassage);

      chatMessages.appendChild(mainMessageDiv);
    });
  });

  return (
    <>
      <NavBar userData={userData} />
      <div id="massages" className="max-h-96 overflow-auto"></div>
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
