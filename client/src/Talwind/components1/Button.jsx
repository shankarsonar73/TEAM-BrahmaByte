import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosReturnRight } from "react-icons/io";

function Button({ onClick, title = "GET Started", isLoading, linkTo }) {
  return (
    <div className={`min-w-40 ml-10 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
      {linkTo ? (
        <Link to={linkTo} className="flex items-center justify-between">
          {isLoading ? 'Loading' : <span className='text-sm font-regular'>{title}</span>}
          <IoIosReturnRight />
        </Link>
      ) : (
        <button onClick={onClick} disabled={isLoading} className="flex items-center justify-between">
          {isLoading ? 'Loading' : <span className='text-sm font-regular'>{title}</span>}
          <IoIosReturnRight />
        </button>
      )}
    </div>
  );
}

export default Button;
