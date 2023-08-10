import Login from "./pages/login";
import Chat from "./pages/chat";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

function App() {
  const [userData, setUserData] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (tempUser) => {
      if (tempUser) {
        setIsLogin(true);
        setUserData(tempUser);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return <>{isLogin ? <Chat userData={userData} /> : <Login />}</>;
}

export default App;
