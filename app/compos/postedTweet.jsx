// components/PostedTweet.js
"use client";
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

const PostedTweet = () => {
  const [tweets, setTweets] = useState([]);
  const [replyText, setReply] = useState("");
  const storeRef = collection(db, "Tweets");
  const { tweeted, setTweeted, isLoggedIn } = useStore();

  useEffect(() => {
    async function fetchData() {
      try {
        await load();
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [tweeted]);

  const load = async () => {
    const res = await getDocs(storeRef);
    const filter = res.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      openReply: false,
      Liked: doc.data().LikedBy.includes(auth.currentUser.email),
    }));

    setTweets(filter);

  };

  const updateTweet = async (id, likes, liked) => {
    const docRef = doc(db, "Tweets", id);
    const updateData = liked
      ? { LikeCount: Math.max(0, likes - 1), LikedBy: arrayRemove(auth.currentUser.email) }
      : { LikeCount: likes + 1, LikedBy: arrayUnion(auth.currentUser.email) };

    await updateDoc(docRef, updateData);
  };

  const LikeTweet = (id,tweet) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              LikeCount: tweet.Liked ? tweet.LikeCount - 1 : tweet.LikeCount + 1,
              Liked: !tweet.Liked,
            }
          : tweet
      )
    );
    updateTweet(id, tweet.LikeCount, tweet.Liked); // Update Firestore data
  };

  const replyOpen = (id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, openReply: !tweet.openReply } : tweet
      )
    );
  };

  // components/PostedTweet.js

// ...

const PostReply = async (id) => {
  if(replyText.length > 0)
  {
    const docRef = doc(db, "Tweets", id);
  const newReply = {
    Profile: auth.currentUser.photoURL,
    User: auth.currentUser.displayName,
    Content: replyText,
  };
  await updateDoc(docRef, {
    reply: arrayUnion(newReply),
  });

  setTweets((prevTweets) =>
    prevTweets.map((tweet) =>
      tweet.id === id
        ? {
            ...tweet,
            reply: [newReply, ...tweet.reply], // Add new reply to the beginning
          }
        : tweet
    )
  );

  }
  setReply(""); // Clear the reply input after posting
};

// ...


tweets.forEach((Doc) => {
  const docRef = doc(db, "Tweets", Doc.id);
  onSnapshot(docRef, (snapshot) => {
    const updatedTweet = snapshot.data();
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === Doc.id ? { ...tweet, ...updatedTweet } : tweet
      )
    );
  });
});


  return (
    <div className=" w-full flex flex-col justify-center items-start">
      {tweets?.map((tweet, index) => {
        return (
          <div
            key={index}
            className=" w-full h-auto transition-all ease-in  flex flex-col gap-1 justify-center items-start border-b-[0.5px] border-slate-600 p-4"
          >
            <div className="flex justify-start items-center gap-3 p-1">
             {isLoggedIn ?  <Image
                className="rounded-full cursor-pointer"
                src={tweet.ProfileUrl}
                width={40}
                height={40}
                alt="user"
              /> : <></> }
              <p className=" text-slate-400">{tweet.UserName}</p>
            </div>
            <div className="flex flex-col ml-[60px] gap-2">
              <div className=" text-white w-full flex flex-col gap-3 justify-center items-start mr-2">
                <p className=" font-sans">{tweet.Body}</p>
                {tweet.ImageUrl === null ? (
                  <></>
                ) : (
                  <div className="mt-0 w-400px h-[400px] grid place-items-center rounded-lg border-[0.5px] border-slate-600">
                    <Image
                      src={tweet.ImageUrl}
                      width={400}
                      height={300}
                      alt="image"
                    />
                  </div>
                )}
              </div>
              <div className=" flex justify-start items-center gap-4">
                <div
                  onClick={() => {
                    LikeTweet(tweet.id,tweet);
                  }}
                >
                  <LikeButton isLiked={tweet.Liked} count={tweet.LikeCount} />
                </div>

                <div>
                  <div className=" flex gap-5">
                    <p
                      onClick={() => {
                        replyOpen(tweet.id);
                      }}
                      className=" text-blue-600 cursor-pointer select-none"
                    >
                      {tweet.openReply ? "hide " : "view "} replies ({tweet.reply.length})
                    </p>
                    
                  </div>
                </div>
              </div>
              {tweet.openReply ? (
                <div className=" border-l p-2 pt-0 border-dashed border-slate-400 select-none max-h-[700px] overflow-y-auto">
                   <div className="bg-[rgba(22,24,28)] rounded-2xl flex flex-col w-[400px] p-2 gap-2 sticky top-0">
                       <span className="text-slate-400">reply to <span className="text-blue-500">@{tweet.UserName}</span></span>
                       <input onChange={(e)=> setReply(e.target.value) } type="text" className=" bg-black rounded-xl p-3 focus:outline-none text-slate-300 " />
                       <div value={replyText} className=" flex justify-end">
                       <button onClick={()=> { PostReply(tweet.id)  }} className=" p-1 rounded-xl px-3 bg-blue-500 hover:bg-blue-700 text-white w-20" >Post</button>
                       </div>
                   </div>
                  {tweet.reply.sort().map((reply, index) => {
                    return (
                      <div className=" flex flex-col gap-3 transition-all ease-in mx-2 my-3 px-2 py-3 border-b-[0.5px] border-blue-500 " key={index}>
                         <div className=" flex justify-start items-center gap-2">
                           <Image className=" rounded-full" src={reply.Profile} width={40} height={40} alt="profile" />
                           <p className=" text-slate-400 p-2">{reply.User}</p>
                         </div>
                         <div>
                          <p className=" text-slate-200 pl-3"> <span className="text-blue-800">{"@"+tweet.UserName + "  "}</span>{reply.Content}</p>
                         </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostedTweet;
