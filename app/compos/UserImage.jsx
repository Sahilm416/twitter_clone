"use client"
import React from 'react'
import { auth } from '../config/firebase';
import Image from 'next/image';
import Loader from './loader';
import { useEffect,useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useStore } from '../store';

const UserImage = ({w,h}) => {
  const [loader,setLoader] = useState(true);
  const {isLoggedIn} = useStore();
  useEffect(()=>{
      const unsub = onAuthStateChanged(auth,(user)=>{
        if(user) { setLoader(false)  } else { setLoader(true) }
      })
  },[])
  const height = h + "px" ;
  const width = w + "px";
  return (
    <>
       {isLoggedIn ? <div className={`bg-black cursor-pointer hover:shadow-sm hover:shadow-white rounded-full flex justify-center items-center w-[${width}] h-[${height}]`}>
       {loader ? <Loader/> : <Image className='rounded-full' src={auth?.currentUser?.photoURL} width={w} height={h} alt='profile-image' />}
       </div> : <></>}
    </>
  )
}

export default UserImage