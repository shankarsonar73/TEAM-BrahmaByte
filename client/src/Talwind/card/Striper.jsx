import React from 'react';

function Striper({ val }) {
  return (  //border-b-[1px] border-zinc-600   border-t-[1px]
    <div className='flex-1 px-10 py-5  flex justify-between items-center'>
      <img src={val.url} alt='' />
      <span className='font-semibold text-white'>{val.number}</span>
    </div>
  );
}

export default Striper;
