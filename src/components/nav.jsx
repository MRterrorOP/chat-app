import { useState } from "react";
import UserDetails from "./userDetails";

const NavBar = ({ userData }) => {
  const [userDetailsVisible, setuserDetailsVisible] = useState(false);

  const handelInfoVisible = () => {
    setuserDetailsVisible(!userDetailsVisible)
  } 
  return (
    <>
      <nav className="flex justify-between bg-neutral-900 p-5 items-center font-display rounded-b-3xl">
        <div
          id="leftNav"
          className="flex items-center p-1 hover:bg-[#24234b] rounded-full cursor-pointer transition-all duration-300"
          onClick={handelInfoVisible}
        >
          <img
            src={userData.photoURL}
            alt={userData.displayName}
            className="rounded-full h-12 p-1"
          />
          <h1 className="text-ellipsis overflow-hidden whitespace-nowrap max-w-[10rem] text-xl px-2">
            {userData.displayName}
          </h1>
        </div>
        <div id="rightNav">
          <button className="px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#654198] rounded-full hover:bg-[#8c5ad1] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </button>
        </div>
        {userDetailsVisible ? <UserDetails userData={userData} handelInfoVisible={handelInfoVisible} /> : null}
      </nav>
    </>
  );
};

export default NavBar;
