import React from 'react'
import UserImage from '@/app/compos/UserImage';


const Profile = () => {
  return (
    <div className=' w-[500px] h-screen flex justify-center items-start'>
          <div className='flex justify-start items-end w-full h-[150px] bg-slate-800'>
               <div className='w-[100px] h-[100px] ml-5 translate-y-[50px] rounded-full flex justify-center items-center '>
                    <UserImage w={100} h={100}/>
               </div>
          </div>
    </div>
  )
}

export default Profile;