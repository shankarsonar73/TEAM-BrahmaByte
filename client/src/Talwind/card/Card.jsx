import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "none" }) {
  const quote = "The only way to do great work is to love what you do. - Steve Jobs";

  return (
    <div className={`bg-zinc-800 p-5 hover:bg-violet-900 text-white rounded-xl ${width} min-h-[22rem] flex flex-col justify-between`}>
      <div>
        <div className='w-full flex justify-between items-center'>
          <h3>We are SocialPedia</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className='text-3xl font-medium '>Socially connect with Campus</h1>
      </div>
      <div className='down w-full mt-32'>
        {
          start === true && (
            <>
              <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start Posting</h1>
              <button className='rounded-full py-2 px-5 mt-3  border-[2px] border-zinc-50'>Contact US</button>
            </>
          )
        }

        {
          para === true && (
            <>
              <p className='text-sm text-zinc-200 font-medium mt-5'>Start from here</p>
              <p className='text-xs text-zinc-200 mt-2'>{quote}</p>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Card;
