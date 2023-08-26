"use client";


function Like({isLiked, count}) {

  return (
    <>
       <div className="flex gap-2">
              {/*" fill-[rgba(254,24,128)]" */}
      <button
      
      className=" bg-transparent p-1 gap-2 flex justify-center items-center rounded-full hover:bg-[rgba(249,24,128,0.2)] "
      
    >
      <div
        className={`w-[20px] stroke-[rgba(113,118,123)] hover:stroke-[rgba(254,24,128)]`} 
         style={{
          fill: `${ isLiked ? "rgba(254,24,128)" : "none"}`
         }}
      >
        <div>
          <div></div>
          <svg className=" ]" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
            </g>
          </svg>
        </div>
      </div>
    </button>
    <p className=" cursor-pointer text-red-600">
      {count}
    </p>
       </div>
    </>
  );
}

export default Like;
