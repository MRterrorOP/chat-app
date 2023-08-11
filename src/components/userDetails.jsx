const UserDetails = ({ userData, handelInfoVisible }) => {
  return (
    <div
      id="main"
      className="fixed 
      top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
      bg-[#623279] drop-shadow-2xl rounded-xl p-5"
    >
      <div className="flex justify-between items-center font-semibold">
      <button
        onClick={handelInfoVisible}
        className="px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#7f50c0] hover:bg-[#9f65f1] rounded-full focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
      <h1>User Details</h1>
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex items-center">
          <img
            src={userData.photoURL}
            alt={userData.displayName}
            className="rounded-full h-12 p-1"
          />
          <h1 className="text-ellipsis max-w-[10rem] text-xl px-2 leading-5">
            {userData.displayName}
          </h1>
        </div> 
        <div className="mt-3 ml-2">
        <h1 className="w-56 truncate">Email : {userData.email}</h1>
        <h1 className="w-56 pt-2">L-Login : {userData.metadata.lastSignInTime}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
