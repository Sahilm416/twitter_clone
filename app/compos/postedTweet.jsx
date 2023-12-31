// components/PostedTweet.js
"use client";
import { motion ,AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { auth, db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

import LikeButton from "./likebutton";
import UserImage from "./UserImage";
import Link from "next/link";

import { useStore } from "../store";

const PostedTweet = () => {
  const storeRef = collection(db, "Tweets");
  const [tweets, setTweets] = useState([]);

  const { setPosts } = useStore();
  useEffect(() => {
    try {
      onSnapshot(storeRef, (posts) => {
        const filter = posts.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          isLiked: doc.data().LikedBy.includes(auth?.currentUser?.email),
        }));
        setTweets(filter);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <motion.div  initial={{opacity: 0 ,dur: 1}} whileInView={{opacity: 1, dur: 1}} className=" relative sm:w-[600px] w-[400px]">
      {tweets?.map((post, index) => {
        return (
          <div  key={index}>
            <Link
              onClick={() => setPosts(post)}
              href={"/feed/post/" + post.id }
             
              className="  cursor-pointer flex gap-2  h-auto w-full p-2 "
            >
              <div className=" flex flex-col justify-start items-center w-[50px] p-1 ">
                <UserImage w={45} h={45} src={post.ProfileUrl} />
              </div>
              <div className=" w-full ">
                <p className=" cursor-pointer flex justify-start items-center h-[50px] w-[100px] text-white font-semibold hover:underline">
                  {post.UserName}
                </p>
                <div>
                  <div
                    
                    className=" mb-3 font-sans text-slate-200 text-md leading-6 pr-2 text-left "
                  >
                    {post.Body}
                  </div>
                  {post.ImageUrl === null ? (
                    <></>
                  ) : (
                    <AnimatePresence >
                      <motion.div initial={{opacity: 0, dur: 1}} animate={{opacity: 1}}>
                      <Image
                        className=" rounded-sm w-full h-auto mr-2"
                        width={500}
                        height={500}
                        src={post.ImageUrl}
                        alt="image"
                      />
                      </motion.div>
                      </AnimatePresence>
                   
                  )}
                </div>
              </div>
            </Link>
            <div  className="py-3 my-3 border-b-[0.5px] border-slate-600 pl-[50px]">
              <LikeButton
                count={post.LikeCount}
                isLiked={post.isLiked}
                id={post.id}
                post={post}
              />
            </div>
       
          </div>
        );
      })}
    </motion.div>
  );
};

export default PostedTweet;
