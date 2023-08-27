// components/PostedTweet.js
"use client";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import Image from "next/image";
import { auth, db } from "../config/firebase";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot
} from "firebase/firestore";
import { useStore } from "../store";
import LikeButton from "./likebutton";
import UserImage from "./UserImage";

const PostedTweet = ()=>{
  
  const storeRef = collection(db,"Tweets");
  const [tweets,setTweets] = useState([]);
  const {tweeted} = useStore()

  useEffect(()=>{
    onSnapshot(storeRef,(posts)=>{
      const filter = posts.docs.map((doc)=>({
       ...doc.data(),
       id: doc.id,
       isLiked: doc.data().LikedBy.includes(auth?.currentUser?.email)
      }))
      setTweets(filter);
    
    
 })
  },[tweeted])

  return(<>
    {tweets?.map((post,index)=>{ 
      return (
       
           <div key={index} className="  cursor-pointer flex gap-2  h-auto w-full p-2 border-b-[0.5px] border-slate-600">
              <div className=" flex flex-col justify-start items-center w-[50px] p-1 ">
                  <UserImage w={45} h={45} src={post.ProfileUrl} />
              </div>
              <div className=" w-full " >
                  <p className=" cursor-pointer flex justify-start items-center h-[50px] w-[100px] text-white font-semibold hover:underline" >{post.UserName}</p>
                  <div>
                    <p className=" mb-3 font-sans text-slate-200 text-md leading-6 pr-2 text-left " >{post.Body}</p>
                    {post.ImageUrl === null ? <></> : 
                       <Image className=" rounded-sm w-full h-auto mr-2" width={500} height={500} src={post.ImageUrl} alt="image" />
                    }
                  </div>
                  <div className="py-3 my-3">
                    <LikeButton count={post.LikeCount} isLiked={post.isLiked} id={post.id}/>     
                  </div>
              </div>
           </div>
        
      
      )
    })}
  
  
  </>)
}

export default PostedTweet;
