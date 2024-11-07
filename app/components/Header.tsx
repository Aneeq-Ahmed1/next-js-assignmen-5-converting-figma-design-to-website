import React from 'react'
import {Rye} from '@next/font/google'

const rye = Rye({
  subsets: ['latin'],
  weight: ['400'],
});

const Header = () => {
  return (
    // testing
    
    // <div className='bg-[#A29875]  w-[1920px] h-[134px] top-5 left-9 '>
    //   <h1 className={`text-white ${rye.className} font-rye font-normal p-6 text-[75px] leading-[93.75px]`}>MANZZARI</h1>
    // </div>

    <div className='bg-[#A29875] w-full min-h-[120px] flex items-center  px-6 '>
      <h1 className={`text-white ${rye.className} font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] 2xl:text-[65px] leading-tight `}>MANZZARI</h1>
    </div>
  
  )
}

export default Header
