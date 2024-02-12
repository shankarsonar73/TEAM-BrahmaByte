import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "GET Started", onClick }) {
  return (
    <div className='min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
      <a href="#" onClick={onClick} className='flex items-center justify-between'>
        <span className='text-sm font-regular'>{title}</span>
        <IoIosReturnRight/>
      </a>
    </div>
  );
}

export default Button;
