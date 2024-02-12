import React from 'react'
import Navbar from '../../components1/Navbar'
import Work1 from '../../components1/Work1'
import Products1 from '../../components1/Products1'
import Marquees from '../../components1/Marquees'
import Cards from '../../components1/Cards'
import Footer from '../../components1/Footer'
import { Toaster } from 'react-hot-toast';


function Home() {
  return (
    <div className='w-full  bg-zinc-900 font-gg-sans-semibold'>
      <Navbar/>
      <Work1/>
      <Products1/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home
