"use client";
import Aside from "./Aside";
import Right from "./Right";
import Top from "./Top";
import { auth } from "../config/firebase";
import { useStore } from "../store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import TopPost from "../compos/Top-Post";
export default function FeedLayOut({ children }) {
  const { setTrue, setFalse} = useStore();
  const router = useRouter();
  const path = usePathname();

  const check = path.includes("/feed/post/") || path.includes("/feed/profile")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setTrue();
      } else {
        console.log("User is signed out");
        setFalse();
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="m-0 p-0 flex justify-center w-[100vw]">
     
        <Aside />
          <div className="flex flex-col h-[100vh]">
               {check ? <TopPost/> : <Top/>}
              {children}
          </div>
        <Right />
  
    </main>
  );
}
