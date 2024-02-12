import React from 'react'

function Marqu1({imagesurl}) {
  return (
    <div className='flex w-full py-5 gap-16  whitespace-nowrap overflow-hidden'>
      {imagesurl.map(url => <img src = {url} className='w-[6vw] flex-shrink-0'/>)}
      {imagesurl.map(url => <img src = {url} className='w-[6vw] flex-shrink-0 '/>)}
    </div>
  )
}


export default Marqu1
