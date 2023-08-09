import './App.css'
import Login from "./pages/login"
import Chat from "./pages/chat"
import { useState, useEffect } from 'react'

function App() {
  
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')))

  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin]);
  
  return (
    <>
      { isLogin ? <Chat/> : <Login setIsLogin={setIsLogin} /> }
    </>
  )
}

export default App
