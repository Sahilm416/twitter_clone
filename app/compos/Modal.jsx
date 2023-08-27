import React from "react";
import Image from "next/image";
const Modal = ({src}) => {
  return <>
            <div className="absolute top-0 right-10 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[rgba(1,1,1,0.95)] z-40">
                   <div>
                      <Image className="mr-[100px]" src={src} width={400} height={400} alt="image" />
                   </div>
            </div>
        </>;
};

export default Modal;