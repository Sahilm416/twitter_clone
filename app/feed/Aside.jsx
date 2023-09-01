"use client";
import { signOut } from "firebase/auth";
import UserImage from "../compos/UserImage";
import { useStore } from "../store";
import Image from "next/image";
import { useState } from "react";
import { auth } from "../config/firebase";
import Link from "next/link";
import { motion } from "framer-motion";
import InputTweet from "../compos/InputTweet";
const Aside = () => {
  const { setFalse, isLoggedIn } = useStore();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  //const router = useRouter();
  const logOut = async () => {
    try {
      await signOut(auth);

      setFalse();
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <aside className=" sm:flex hidden flex-col justify-start items-start md:max-w-[300px] h-[100vh] border-e-[1px] border-slate-500 mt-0">
        <button className="mb-3 mt-5">
          <svg
            className="ml-10 fill-white sm:w-[30px] w-[70px] select-none  r-k200y r-1nao33i r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-kzbkwu r-bnwqim r-1plcrui r-lrvibr"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </button>
        <Link
          href="/feed"
          className="py-2 bg-transparent hover:bg-slate-900 rounded-3xl mx-5 px-5 text-2xl flex justify-center items-center gap-3"
        >
          <svg
            className=" fill-slate-200 w-[25px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
            </g>
          </svg>{" "}
          Home
        </Link>
        <button className="py-2 bg-transparent hover:bg-slate-900 rounded-3xl mx-5 px-5 text-2xl flex justify-center items-center gap-3">
          <svg
            className=" fill-slate-200 w-[25px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            </g>
          </svg>{" "}
          Explore
        </button>
        <button className="py-2 bg-transparent hover:bg-slate-900 rounded-3xl mx-5 px-5 text-2xl flex justify-center items-center gap-3">
          <svg
            className=" fill-slate-200 w-[25px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
            </g>
          </svg>{" "}
          Notification
        </button>
        <button className="py-2 bg-transparent hover:bg-slate-900 rounded-3xl mx-5 px-5 text-2xl flex justify-center items-center gap-3">
          <svg
            className=" fill-slate-200 w-[25px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
            </g>
          </svg>{" "}
          Messages
        </button>
        <button className="py-2 bg-transparent hover:bg-slate-900 rounded-3xl mx-5 px-5 text-2xl flex justify-center items-center gap-3">
          <svg
            className=" fill-slate-200 w-[25px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>
            </g>
          </svg>{" "}
          List
        </button>
        <button className="py-2 bg-transparent hover:bg-slate-900 rounded-3xl mx-5 px-5 text-2xl flex justify-center items-center gap-3">
          <svg
            className=" fill-slate-200 w-[25px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
            </g>
          </svg>{" "}
          Communities
        </button>
        <button className="py-2 bg-transparent hover:bg-slate-900 rounded-3xl mx-5 px-5 text-2xl flex justify-center items-center gap-3">
          <svg
            className=" fill-slate-200 w-[25px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M8.52 3.59c.8-1.1 2.04-1.84 3.48-1.84s2.68.74 3.49 1.84c1.34-.21 2.74.14 3.76 1.16s1.37 2.42 1.16 3.77c1.1.8 1.84 2.04 1.84 3.48s-.74 2.68-1.84 3.48c.21 1.34-.14 2.75-1.16 3.77s-2.42 1.37-3.76 1.16c-.8 1.1-2.05 1.84-3.49 1.84s-2.68-.74-3.48-1.84c-1.34.21-2.75-.14-3.77-1.16-1.01-1.02-1.37-2.42-1.16-3.77-1.09-.8-1.84-2.04-1.84-3.48s.75-2.68 1.84-3.48c-.21-1.35.14-2.75 1.16-3.77s2.43-1.37 3.77-1.16zm3.48.16c-.85 0-1.66.53-2.12 1.43l-.38.77-.82-.27c-.96-.32-1.91-.12-2.51.49-.6.6-.8 1.54-.49 2.51l.27.81-.77.39c-.9.46-1.43 1.27-1.43 2.12s.53 1.66 1.43 2.12l.77.39-.27.81c-.31.97-.11 1.91.49 2.51.6.61 1.55.81 2.51.49l.82-.27.38.77c.46.9 1.27 1.43 2.12 1.43s1.66-.53 2.12-1.43l.39-.77.82.27c.96.32 1.9.12 2.51-.49.6-.6.8-1.55.48-2.51l-.26-.81.76-.39c.91-.46 1.43-1.27 1.43-2.12s-.52-1.66-1.43-2.12l-.77-.39.27-.81c.32-.97.12-1.91-.48-2.51-.61-.61-1.55-.81-2.51-.49l-.82.27-.39-.77c-.46-.9-1.27-1.43-2.12-1.43zm4.74 5.68l-6.2 6.77-3.74-3.74 1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36z"></path>
            </g>
          </svg>{" "}
          Verified
        </button>
        <Link
          href="/feed/profile"
          className="py-2 bg-transparent hover:bg-slate-900 rounded-3xl mx-5 px-5 text-2xl flex justify-center items-center gap-3"
        >
          <svg
            className=" fill-slate-200 w-[25px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
            </g>
          </svg>{" "}
          Profile
        </Link>
        <button className="py-2 bg-transparent hover:bg-slate-900 rounded-3xl mx-5 px-5 text-2xl flex justify-center items-center gap-3">
          <svg
            className=" fill-slate-200 w-[25px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
            </g>
          </svg>{" "}
          More
        </button>
        <button
          onClick={() => setShow(true)}
          className="py-2 my-3 bg-blue-500 text-white rounded-3xl mx-5 w-[250px] text-xl flex justify-center items-center gap-3"
        >
          Post
        </button>

        <div
          style={{
            boxShadow: "0px 0px 10px #cbd5e1",
            display: `${open ? "flex" : "none"}`,
          }}
          className="w-[280px] fixed bottom-[90px] z-10 rounded-[10px] justify-center items-center h-[80px] bg-black"
        >
          <button
            onClick={logOut}
            className=" p-2 px-3 bg-slate-200 text-black hover:bg-slate-300 text-lg"
          >
            Logout{" "}
            <span className="text-blue-700 ">
              {auth?.currentUser?.displayName}
            </span>{" "}
            ?
          </button>
        </div>

        <div
          onClick={() => {
            setOpen(!open);
          }}
          className=" flex w-[280px] gap-4 cursor-pointer px-2 hover:bg-slate-900 rounded-[30px] py-2 items-center justify-between fixed bottom-[20px]"
        >
          <UserImage w={45} h={45} src={auth?.currentUser?.photoURL} />
          <div className="flex flex-col ">
            <p className="text-slate-500">{auth?.currentUser?.displayName}</p>
            <p className="text-slate-500 text-xs">{auth?.currentUser?.email}</p>
          </div>
          <button>
            <svg
              className="w-[5px] fill-slate-200"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29.96 122.88"
            >
              <path d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z" />
            </svg>
          </button>
        </div>
      </aside>
      {show && (
        <motion.div  initial={{opacity: 0 ,dur: 1}} whileInView={{opacity: 1}} className="w-[100vw] top-0 right-0 z-50 h-[100vh] flex flex-col justify-center items-center bg-[rgba(1,1,1,0.90)] absolute">
          <div className="flex w-[400px] justify-end items-center">
            <button
              onClick={() => setShow(false)}
              className=" rounded-full hover:bg-slate-800 bg-transparent p-0 m-1"
            >
              <svg
                className=" w-[50px] fill-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
              </svg>
            </button>
          </div>
          <div className="w-[400px] bg-black border-x-[0.5px] border-slate-600">
            <InputTweet />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Aside;
