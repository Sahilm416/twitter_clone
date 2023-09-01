"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TopPost = () => {
const router = useRouter();

  return (
    <>
      <div
        style={{
          background: "rgba(22,24,28,0.25)",
          backdropFilter: "blur(8px)",
        }}
        className="flex sticky top-0 z-30 gap-[10px]  flex-col w-full h-[80px] border-b-[1px] border-slate-400"
      >
        <div className={"sticky w-full h-[30px] flex justify-start"} >
          <p onClick={()=> router.back() } className={"text-slate-300 text-lg p-2 font-semibold cursor-pointer hover:text-blue-500"}>back</p>
        </div>
      </div>
     
    </>
  );
};

export default TopPost;
