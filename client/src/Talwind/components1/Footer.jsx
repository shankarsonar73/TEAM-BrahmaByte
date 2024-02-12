import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-1 px-1 md:px-32 mx-4 md:mx-[20px] mt-4  md:mt-[50px] border-[2px] border-sky-blue-200 rounded-full bg-blue'>
            <div className="flex flex-row items-center justify-center gap-4 md:gap-8">
                <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg" className="h-12 md:h-[60px] w-20 md:w-[100px] rounded-full" alt='Logo' />
                <h1 className="text-white font-my-font1 text-md leading-[1.5] md:leading-[42px] text-center gotu">Brahma  Byte</h1>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-8">
    <h4 className='font-medium text-md text-white/75 cursor-default'>
        <span title='Love'>❤️</span> & <span title='Coffee'>☕</span> | Team Brahma Byte
    </h4>
    <h4 className='font-medium text-md text-white/75 cursor-default'> HackFusion 2024</h4>
</div>

        </div>
    )
}

export default Footer;
