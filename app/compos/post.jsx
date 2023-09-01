"use client"
import React from 'react'

import UserImage from './UserImage';
import Image from 'next/image';

import { motion } from 'framer-motion';

const post = ({post}) => {

   




  return (
    <>
        <motion.div  initial={{opacity: 0 ,dur: 1}} whileInView={{opacity: 1}}
              
              className="  cursor-pointer flex gap-2  h-auto w-full p-2 "
            >
              <div className=" flex flex-col justify-start items-center w-[50px] p-1 ">
                {post.ProfileUrl === undefined ? <></> : <UserImage w={45} h={45} src={post.ProfileUrl} />}
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
                  {post.ImageUrl === undefined || post.ImageUrl === null ? (
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
            </motion.div>
            
    </>
  )
}

export default post