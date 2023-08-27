"use client"
import React from 'react'
import UserImage from '@/app/compos/UserImage';
import { auth } from '@/app/config/firebase';


const Profile = () => {
  return (
    <div className=' sm:w-[600px] w-[400px] h-screen flex justify-center items-start'>
          <div className='flex justify-start items-end w-full h-[150px] bg-slate-800'>
               <div className='w-[100px] h-[100px] ml-5 translate-y-[50px] rounded-full flex justify-center items-center '>
                    <UserImage w={100} h={100} src={auth?.currentUser?.photoURL} />
               </div>
          </div>
    </div>
  )
}

export default Profile;