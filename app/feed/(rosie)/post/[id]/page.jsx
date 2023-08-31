"use client";
import style from '../../../../font.module.css'
import React from "react";
import PostArea from "../../../../compos/post";
import { auth, db } from "../../../../config/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import CommentLike from "@/app/compos/commentLike";
import LikeButton from "@/app/compos/likebutton";
import Image from "next/image";
import UserImage from "@/app/compos/UserImage";




const PostPage = ({ params }) => {
  const storeRef = collection(db, "Tweets");
  const [post, setPost] = useState({});
  const  [reply,setReply] = useState([]);
  const [openReply,setOpenReply] = useState(false);
  useEffect(() => {
    try {
      onSnapshot(storeRef, (posts) => {
        const filter = posts.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          isLiked: doc.data().LikedBy.includes(auth?.currentUser?.email),
        }));
        const tweet = filter.find((doc) => doc.id === params.id);
        const resReply = tweet.reply;
        const finalReply = resReply.map((doc) => ({
          ...doc,
          isLiked: doc.LikedBy.includes(auth.currentUser.email),
        }));
        setReply(finalReply);
        setPost(tweet);
      });
    } catch (err) {
      console.log(err);
    } finally {
      console.log(post);
    }
  }, []);

  return (
    <>
      <div id={style.feed} className=" sm:w-[600px]  w-[400px] overflow-y-auto">
       
        {post !== undefined && post.id !== undefined ? (
          <>
            <PostArea post={post} />

            <div className="p-1 pl-[55px] my-2 border-b-[0.5px] border-slate-600">
            <LikeButton
              count={post.LikeCount}
              isLiked={post.isLiked}
              id={post.id}
              post={post}
            />
            </div>
          </>
        ) : (
          <></>
        )}
         <p onClick={()=> setOpenReply(!openReply)} className=" flex flex-col text-blue-400 select-none text-lg font-sans p-2 cursor-pointer">{openReply ? <> close replies </> : <>show replies</>}</p>
         
        {openReply ? <>  {reply.map((rep,index)=>{

return (
  <div key={index}>
      <div  className="  cursor-pointer flex gap-2  h-auto w-full p-2 " >
       <div className=" flex flex-col justify-start items-center w-[50px] p-1 ">
      <UserImage w={45} h={45} src={rep.ReplyProfile} />
    </div>
    <div className=" w-full ">
      <p className=" cursor-pointer flex justify-start items-center h-[50px] w-[100px] text-white font-semibold hover:underline">
        {rep.ReplyUser}
      </p>
      <div>
        <div
          
          className=" mb-3 font-sans text-slate-200 text-md leading-6 pr-2 text-left "
        >
          {rep.ReplyBody}
        </div> 

        </div>  
        </div>
  </div>
    <div className="p-1 pl-[55px] my-2 border-b-[0.5px] border-slate-600">
    <CommentLike count={rep.LikeCount} post={rep} isLiked={rep.isLiked} id={post.id} index={index} />
    </div>
  </div>
)
})}  </> : <></> }
      </div>
    </>
  );
};

export default PostPage;


