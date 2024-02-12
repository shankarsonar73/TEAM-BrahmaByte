import React from 'react';
import Button from '../components1/Button';

function Prodct({ val, bgColor = "none" }) {
  return (
    <div className={`w-full py-10 sm:py-20 ${val.bgColor} text-white`}>
      <div className='max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-0'>
        <h1 className='text-3xl sm:text-6xl capitalize font-semibold mb-4 sm:mb-0'>{val.title}</h1>
        <div className='dets w-full sm:w-1/3 mt-4 sm:mt-0'>
          <p className='text-lg sm:text-xl mb-6'>{val.description} </p>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            {val.live && <Button title="Live" />}
            {val.case && <Button title="Case" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prodct;
