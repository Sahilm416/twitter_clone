"use client";
import Style from "./font.module.css";
import { auth } from "./config/firebase";
import { GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useStore } from "./store";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();

  const { isLoggedIn, setTrue } = useStore();
  const googleProvider = new GoogleAuthProvider(auth);
  useStore.subscribe((state) => {
    console.log("sub just now and isloggedIn is " + state.isLoggedIn);
  });
  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        // User is signed in.
        setTrue();
        console.log("user is " + isLoggedIn)
        console.log(auth.currentUser.email);
        router.push('/feed');
      } else {
        // User is signed out.
         
        console.log("User is signed out");
      }
    });

    return () => unsubscribe(); 
  }, []);

  const signInGoogle = async () => {
    
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
      setTrue();

      router.push("/feed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <main className="grid place-items-center w-full h-[100vh] select-text selection:bg-violet-700 selection:text-white">
        <div className="flex flex-col sm:flex-row justify-center gap-10 items-center w-full max-w-[1600px]">
          <div className="sm:w-[60%] mt-2 w-full flex items-center justify-center">
            <svg
              className="fill-white sm:w-[350px] w-[70px] select-none  r-k200y r-1nao33i r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-kzbkwu r-bnwqim r-1plcrui r-lrvibr"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
          <div className="sm:w-[40%] sm:mt-0 mt-1 overflow-auto w-full sm:block flex flex-col justify-center items-center">
            <h1
              id={Style.h1}
              className="sm:text-6xl sm:ml-0 ml-1 text-3xl text-left font-bold font-sans"
            >
              Happening now
            </h1>
            <h2 className="mt-8 mb-5 sm:mb-10 font-bold text-3xl font-sans">
              join today.
            </h2>
            <button
              onClick={signInGoogle}
              className="flex translate-y-[20px] hover:bg-slate-300 justify-center items-center gap-3 bg-slate-100 text-black w-[300px] my-2 border-2 p-2 rounded-3xl"
            >
              <svg
                className="w-[25px] LgbsSe-Bz112c"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>{" "}
              google
            </button>{" "}
            <br />
            <button className="w-[300px] flex justify-center items-center gap-3 hover:bg-slate-300 bg-slate-100 text-black  border-2 p-2 rounded-3xl">
              <svg
                className="fill-black w-[25px] r-4qtqp9 r-yyyyoo r-z80fyv r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g>
                  <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                </g>
              </svg>
              Sign up with Apple
            </button>
            <div className="w-[300px] ">
              <p className="text-center my-1">OR</p>
            </div>
            <button className="w-[300px] hover:bg-blue-700 bg-blue-500 outline-none border-none my-1 border-2 p-2 rounded-3xl">
              Create account
            </button>
            <p className="w-[290px] sm:text-left text-center text-slate-300 sm:mb-12 mb-3 mt-1 text-[10px] font-sans">
              By signing up, you agree to the{" "}
              <span className="text-blue-600 cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer">
                Privacy Policy{" "}
              </span>
              , including{" "}
              <span className="text-blue-600 cursor-pointer">Cookie Use.</span>
            </p>
            <h3 className="my-3">Already have an account ?</h3>
            <button className="border-blue-500 text-blue-600 hover:border-blue-700 hover:text-blue-800 w-[300px] my-2 border-2 p-2 rounded-3xl">
              sign in
            </button>
          </div>
        </div>
      </main>

      <p className=" no-underline text-slate-400 mb-5 text-center">
        Marketing X for Business Developers Directory Settings © 2023 X Corp.
      </p>
    </>
  );
}
