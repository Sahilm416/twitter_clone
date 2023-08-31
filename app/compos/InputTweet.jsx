"use client"
import { useEffect, useState } from "react";
import { useStore } from "../store";
import UserImage from "./UserImage";
import Link from "next/link";
import { storage ,db, auth } from "../config/firebase";
import { getDocs , getDoc , addDoc ,collection} from "firebase/firestore";
import { v4 } from "uuid";
import { ref,uploadBytes,getDownloadURL} from "firebase/storage";
import { toast } from "react-toastify";



const InputTweet = () => {
 
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  let url = null;
  const {tweeted,setTweeted} = useStore();



  const dbRefer = collection(db,"Tweets");

  const handleTextareaChange = (event) => {
    if(event.target.value.length > -1 )
    {
      setContent(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
    }
    else{
      return
    }
  };

const tweet = async () =>{
 
     if(content.length > 1 )
     { 
      
      try{
        if(selectedImage === null)
        {
          
        }
        else{
         
          const refer = ref(storage,`images/${selectedImage.name + v4() }`);
  
        const res = await uploadBytes(refer,selectedImage);
        url = await getDownloadURL(refer);
        }
        

         await addDoc(dbRefer,{
          UserId: auth.currentUser.uid,
          ProfileUrl: auth.currentUser.photoURL,
          Body : content,
          ImageUrl: url,
          LikeCount: 0,
          UserName: auth.currentUser.displayName,
          reply: [],
          LikedBy: [],
         })
         setContent("");
         setSelectedImage(null);
         setTweeted();
         toast("Tweet posted successfully ",{
          type: 'success',
          autoClose: 3000

        })
       
         

      }
      catch(err)
      {
        console.log(err);
      }
     }
     else {
      return
     }


}



  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div className="w-full p-0 m-0">
      <div className="p-4 border-y-[0.5px] w-full border-slate-600 shadow-md">
        <div className="flex items-start">
          <Link href='/feed/profile'><UserImage w={45} h={45} src={auth?.currentUser?.photoURL} /></Link>
          <div className="flex-1">
            <textarea
              className="w-full p-2 text-lg placeholder-gray-400 bg-transparent resize-none focus:outline-none"
              rows="1"
              placeholder="What's happening?"
              style={{ height: "auto", minHeight: "3rem" }}
              value={content}
              onChange={handleTextareaChange}
            ></textarea>
            <div className="flex w-full justify-center items-center border-[0.5px]  rounded-lg border-slate-600  overflow-hidden">
            {selectedImage && (
              <div className="mt-0 w-400px h-[400px] grid place-items-center rounded-lg ">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className=" rounded-lg h-auto w-auto "
                />
              </div>
            )}
            </div>
            <div className="flex justify-between items-center mt-4 gap-3">
              <label htmlFor="fileInput" className="cursor-pointer">
                
                <span className="ml-1 text-blue-500 hover:text-blue-600">
                  Upload Image
                </span>
                {selectedImage && <button className=" p-2 bg-white text-black rounded-md ml-3" onClick={()=> setSelectedImage(null)}>cancel file</button>}
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
                id="fileInput"
              />
              <button onClick={tweet} className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 focus:outline-none">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputTweet;
