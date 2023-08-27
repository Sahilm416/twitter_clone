




const Aside = () => {


  return (
    <>
<div className="">
<aside className=" hidden sm:flex md:max-w-[400px] h-[100vh] border-s-[1px] border-slate-500 flex-col justify-start items-center">
        <input placeholder="search here..." className=" w-[300px] placeholder:text-slate-400 p-3 bg-[rgba(22,24,28)] outline-none rounded-3xl mt-8 text-white " type="text" />
        <div className="flex  flex-col m-8 mb-0 justify-center items-start bg-[rgba(22,24,28)] rounded-lg p-5 w-[300px]">
            <p className="text-lg pt-3 text-slate-200">Subscribe to Premium</p>
            <p className="text-md text-slate-400">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button className="p-2 my-5 bg-blue-500 text-white px-3 rounded-3xl">subscribe</button>
        </div>
        <div className=" bg-[rgba(22,24,28)] w-[300px] h-[350px] rounded-lg m-8 p-5">
            <p className="text-lg text-slate-200 pt-1 px-2 ">Whats happening ?</p>
        </div>
     </aside>
</div>
    
    </>
  )
}

export default Aside