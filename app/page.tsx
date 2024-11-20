import React from 'react'
import Image from 'next/image';
import Header from '../components/Header';

const page = () => {
  return (
    <div className='h-screen'>
      <Header/>
      <div className='flex h-[80%]'>
        <div className='w-1/2 flex flex-col justify-center items-start m-12'>
          <h1 className='text-[44px] font-bold'>Welcome To Our Website</h1>
          <p className='text-[32px] w-[571px] text-color2'>Lorem Ipsum is simply dummy text of 
           the printing and typesetting industry. 
           Lorem Ipsum has been the industry&apos;s 
           standard</p>
           <br/>
           <button className='box-border w-[237px] h-[60px] bg-button text-[28px] text-button2'>Contact US</button>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
        <Image
          src={"/whatsApp Image 2024-11-01 at 6.36.59 PM.jpeg"}
          alt='figma picture'
          width={502}
          height={485}
         />
        </div>
      </div>
    </div>
  )
}

export default page
