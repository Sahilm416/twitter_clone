"use client";
import { useState } from "react";
import { auth, db } from "../config/firebase";
import { getDoc,getDocs,collection,updateDoc, doc, arrayUnion, arrayRemove, onSnapshot } from "firebase/firestore";
import { useStore } from "../store";





function Like({ isLiked, count,id }) {

 
 
  
  const {setTweeted} = useState();
 
const LikeTweet = async (count,id,isLiked)=>{
  const docRef = doc(db,"Tweets",id);
  if(isLiked)
  {
  
   
   
      await updateDoc(docRef,{
      LikeCount: (count - 1 >= 0 ) ? count - 1 : 0,
      LikedBy: arrayRemove(auth.currentUser.email),
    })
    
    
  }
  else{
    

    await updateDoc(docRef,{
      LikeCount: count + 1,
      LikedBy: arrayUnion(auth.currentUser.email),
    })
   
   
  }
 


}

  return (
    <div className=" flex  justify-between items-center">
      <div className="flex gap-2 items-center">
        {/*" fill-[rgba(254,24,128)]" */}
        <button
          onClick={() => {
            LikeTweet(count,id,isLiked)
          }}
          className=" bg-transparent gap-2 flex justify-center items-center rounded-full hover:bg-[rgba(249,24,128,0.2)] "
        >
          <div
            className={` stroke-slate-300 hover:stroke-[rgba(254,24,128)]`}
            style={{
              fill: `${isLiked ? "rgba(254,24,128)" : "none"}`,
            }}
          >
            <div className=" flex justify-center items-center w-[30px] h-[30px]">
              <svg className="w-[20px]" viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                </g>
              </svg>
            </div>
          </div>
        </button>
        <p className=" cursor-pointer text-slate-400 hover:text-red-500">
          {count}
        </p>
      </div>
      <div className="m-1 rounded-full w-[30px] h-[30px] hover:bg-[rgba(27,132,78,0.5)] flex justify-center items-center">
        <svg
          className=" w-[20px] fill-slate-400 hover:fill-white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <g>
            <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
          </g>
        </svg>
      </div>

      <div className="m-1 rounded-full w-[30px] h-[30px] hover:bg-[rgba(78,52,245,0.50)] flex justify-center items-center">
        <svg
          className="w-[20px] fill-slate-400 hover:fill-white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <g>
            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
          </g>
        </svg>
      </div>
      <div className="m-1 rounded-full w-[30px] h-[30px] hover:bg-[rgba(27,132,78,0.5)] flex justify-center items-center">
        <svg
          className="w-[20px] fill-slate-400 hover:fill-white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <g>
            <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
          </g>
        </svg>
      </div>

      <div className="m-1 rounded-full w-[30px] h-[30px] hover:bg-[rgba(78,52,245,0.50)] flex justify-center items-center">
        <svg
          className="w-[20px] fill-slate-400 hover:fill-white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <g>
            <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Like;
