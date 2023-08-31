import React from "react";
import Link from "next/link";


const TopPost = () => {


  return (
    <>
      <div
        style={{
          background: "rgba(22,24,28,0.25)",
          backdropFilter: "blur(8px)",
        }}
        className="flex sticky top-0 z-30 gap-[10px]  flex-col w-full "
      >
        <div className={"sticky w-full h-[30px] flex justify-start"} >
          <p className={"text-slate-300 text-lg p-2 font-semibold"}>back</p>
        </div>
        <div className="flex w-full">
          <Link
            href="/feed"
            className={"w-[50%] border-b-[1px] border-slate-400 flex justify-center items-end h-[40px] text-slate-300 hover:bg-[rgba(22,24,28)]"} 
          >
          
          </Link>
          <Link
            href="/feed/following"
            className="w-[50%] border-b-[1px] border-slate-400 flex justify-center items-end h-[40px] text-slate-300 hover:bg-[rgba(22,24,28)] "
          >
            
          </Link>
        </div>
      </div>
     
    </>
  );
};

export default TopPost;
