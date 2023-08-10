import NavBar from "../components/nav";

const Chat = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <NavBar userData={userData}/>
    </>
  );
};

export default Chat;
