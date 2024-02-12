import React, { useState } from 'react';
import Button from './Button';

function Work1() {
  const [isHovering, setIsHovering] = useState(false);
  var images = [
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top : "51%", left :"38%", isHovering :false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top : "45%", left :"52%", isHovering :false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top : "45%", left :"60%", isHovering :false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top : "60%", left :"30%", isHovering :false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top : "60%", left :"70%", isHovering :false},
  ]

  return (
    <div className='w-full h-screen bg-customBlue'>
      <img
        src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4db9ca0a124b73d4b7_c40c84ca18d84633a9d86b4046a91437.svg"
        className="absolute mt-[18rem] left-0 z-10 w-[35vw] h-auto"
        alt="Background Image 1"
      />
      <img
        src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4df2dc8d7a9a081ebd_8a8375ab7908384e1fd6efe408284203.svg"
        className="absolute mt-[20rem] right-0 z-10 w-[35vw] h-auto"
        alt="Background Image 2"
      />
      <div className='relative max-w-screen-xl mx-auto flex items-center justify-center text-center'>

        <div className="relative z-0">
          <h1 className='text-[8vw] mt-32 text-white leading-none font-my-font1'>SoVITE</h1>
          <h1 className='text-[32px] mt-10 mb-10  text-white leading-none font-gg-sans-semibold'>(Where You Can Connect!!!!)</h1>

          <p className='text-[1.3vw] max-w-screen-sm font-gg-sans-semibold text-white'>Discover your college's vibrant community on our social media website! Connect with your school clubs, gaming groups, and global art communities. Stay connected with friends, chat daily, and hang out more often. Your campus, your community, your space – join us today!</p>
          <div className='max-w-screen-lg flex justify-center'></div>
        </div>
        <div className='absolute top-0 w-full h-full'>
          {images.map((elem,index) =>(
            <img 
              key={index} 
              className={`absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%] ${elem.isHovering ? 'block' : 'hidden'}`} 
              src={elem.url} 
              style={{top:elem.top,left:elem.left}} 
              alt="" 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work1;
