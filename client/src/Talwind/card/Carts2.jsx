import React from 'react'


function Carts2({ title, content, imageUrl ,bgColor}) {

const Logo = () => (

<div className={`max-w-screen-xl flex h-screen rounded-lg mt-10 items-center mx-auto bg-customBlue`}>
        <div className='flex flex-col justify-between w-1/2'>
        <h1 className='text-2xl font-semibold tracking-tight leading-none ml-10'>Fiver</h1>
                <div className='w-auto h-[40vh] mt-10 ml-52'>
                    <img
                        src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202.png"
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className='w-5/5 h-[40vh] mt-5 ml-8'>
                    <img
                        src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp"
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            <div className='flex flex-col justify-between w-1/2'>
                <div className='w-5/5 h-[60vh]  mt-10 mr-5 ml-8'>
                    <video
                        src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                        autoPlay
                    />
                </div>
                <div className='down w-[80%] mt-5 ml-16'>
                <h1 className='text-[1.2rem] font-semibold justify-center text-white leading-none text-center'>We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.</h1>
                <button className='rounded-full py-2 px-5 mt-3  border-[2px] border-zinc-50 text-white'>Contact US</button>
                </div>
            </div>

    </div>

)
  return (
  <div>
    <Logo />
  </div>
  )
}

export default Carts2
