import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Top = () => {

const path = usePathname();
 const borderFor = path==="/feed"
 const borderFollo = path==="/feed/following"
  return (
    <>
      <div
        style={{
          background: "rgba(22,24,28,0.25)",
          backdropFilter: "blur(8px)",
        }}
        className="flex sticky top-0 z-50 gap-[10px]  flex-col w-full "
      >
        <div className={"sticky w-full h-[30px] flex justify-start"} >
          <p className={"text-slate-300 text-lg p-2 font-semibold"}>Home</p>
        </div>
        <div className="flex w-full">
          <Link
            href="/feed"
            className={"w-[50%] border-b-[1px] border-slate-400 flex justify-center items-end h-[40px] text-slate-300 hover:bg-[rgba(22,24,28)]"} 
          >
            <span style={{borderBottom: borderFor ? '4px solid blue' : '4px solid rgba(0,0,0,0)'}} className="w-60px font-semibold">For you</span>
          </Link>
          <Link
            href="/feed/following"
            className="w-[50%] border-b-[1px] border-slate-400 flex justify-center items-end h-[40px] text-slate-300 hover:bg-[rgba(22,24,28)] "
          >
            <span style={{borderBottom: borderFollo ? '4px solid blue' : '4px solid rgba(0,0,0,0)'}} className="w-60px font-semibold">Following</span>
          </Link>
        </div>
      </div>
     
    </>
  );
};

export default Top;
