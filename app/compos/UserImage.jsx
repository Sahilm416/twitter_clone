"use client"
import React from 'react'
import { auth } from '../config/firebase';
import Image from 'next/image';
import Loader from './loader';
import { useEffect,useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useStore } from '../store';

const UserImage = ({w,h,src}) => {
 
  const {isLoggedIn} = useStore();

  const height = h + "px" ;
  const width = w + "px";
  return (
    <>
       {isLoggedIn ? <div className={`bg-black cursor-pointer hover:shadow-sm rounded-full flex justify-center items-center w-[${width}] h-[${height}]`}>
       {src === null ? <Loader/> : <Image className='rounded-full' src={src} width={w} height={h} alt='profile-image' />}
       </div> : <></>}
    </>
  )
}

export default UserImage