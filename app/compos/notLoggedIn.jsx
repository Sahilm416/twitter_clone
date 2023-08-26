import React from "react";
import Link from "next/link";


const NotLoggedIn = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="sm:w-[500px] w-[350px] flex flex-col justify-center items-center p-4 rounded-xl border-2 py-5">
        <h1 className=" sm:text-4xl text-3xl text-center">User not logged in</h1>
        <Link
          className=" bg-slate-200 text-slate-700 py-2 px-3 my-5 w-[200px] text-center hover:bg-slate-300 hover:text-black rounded-3xl"
          href="/"
        >
          {" "}
          login Now <span>&#8594;</span>{" "}
        </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default NotLoggedIn;
