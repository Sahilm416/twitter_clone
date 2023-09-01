"use client"
import React, { useEffect, useState } from 'react'
import UserImage from '@/app/compos/UserImage';
import { auth, db } from '@/app/config/firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import LikeButton from '../../../compos/likebutton'
import Link from 'next/link';
import Image from 'next/image';
import style from '../../../font.module.css'
import { motion } from 'framer-motion';
const Profile = () => {
  const ref = collection(db,"Users");
  const storeRef = collection(db,"Tweets");
  const [user,setUser] = useState({});
  const [userTeets,setUserTweets] = useState([]);
  const [modal,setModal] = useState(false);
  useEffect(()=>{
       try{
        onSnapshot(ref,(snap)=>{
          const filter = snap.docs.map((doc)=>({
           ...doc.data(),
           id: doc.id
          }))
          const res = filter.find((user) => user.UserEmail === auth.currentUser.email);
          
          setUser(res);
     })
     onSnapshot(storeRef,(snap)=>{
         const filter = snap.docs.map((doc)=>({
           ...doc.data(),
           id: doc.id,
           isLiked: doc.data().LikedBy.includes(auth?.currentUser?.email),
          }))
          const res = filter.filter((post) => {
           return post.UserId === auth.currentUser.uid;
         });
         
         
          setUserTweets(res);
          
     })
       }
       catch(err)
       {
        console.log(err)
       }
  },[])

  return (
    <motion.div  initial={{opacity: 0 ,dur: 1}} whileInView={{opacity: 1}} id={style.feed} className='sm:w-[600px] w-[400px] h-screen flex flex-col gap-[0px] overflow-y-auto'>
    <div className=' flex justify-center items-start'>
          <div className='flex justify-between items-end w-full h-[150px] bg-slate-800'>
               <div className='w-[100px] h-[100px] ml-5 translate-y-[50px] rounded-full flex justify-center items-center '>
                 <UserImage w={100} h={100} src={user?.UserProfile} />
               </div>
               <button onClick={()=> setModal(true)} className='p-2 px-3 bg-black border-2 border-slat-600 text-white hover:bg-slate-900 mb-2 rounded-3xl w-[100px] mr-2 translate-y-[60px] '>Edit</button>
          </div>
          
    </div>
    <div className='pl-[30px] border-b-[0.5px] border-slate-600 mt-[60px]'>
         <p className=' p-2  text-slate-300 text-xl cursor-pointer font-semibold font-sans'>{user.UserName}</p>
         <p className=' p-2  text-slate-400 text-lg cursor-pointer font-semibold font-sans'>{user.UserEmail}</p>
         
         <p className='text-white px-2'>Bio</p>
         <p className=' p-2  text-slate-400 text-lg cursor-pointer font-semibold font-sans'>{user.UserBio}</p>
         
    </div>
    {modal && <div className='h-[100vh] z-50 w-[100vw] absolute top-0 right-0 bg-[rgba(1,1,1,0.85)] flex justify-center items-center'> 
      

      <div className=' w-[400px] h-[400px] bg-white rounded-lg'>
                
      </div>
      
      
       </div>}
      
      <p className='p-2 text-xl text-blue-500 border-b-[0.5px] border-slate-600'>User posts</p>
       <div className=" relative sm:w-[600px] w-[400px]">
      {userTeets?.map((post, index) => {
        return (
          <div  key={index}>
            <Link
             
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
                    
                      <Image
                        className=" rounded-sm w-full h-auto mr-2"
                        width={500}
                        height={500}
                        src={post.ImageUrl}
                        alt="image"
                      />
                   
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
    </div>

    </motion.div>
  )
}

export default Profile;