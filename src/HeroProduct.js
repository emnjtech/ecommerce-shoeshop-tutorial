import React from 'react'


export default function HeroProduct({ id, title, pricing, alt, image, desc, qty }) {



    return (
      
        <div className="md:w-[100%] mx-auto w-[100%] md:h-[400px] h-auto mb-[50px] ">
            
            <div className='md:flex md:justify-between items-start h-full '>
                <div className='md:w-[50%] w-[100%] h-full md:h-full relative'><img src={image} alt={alt} 
                className='w-full h-full rounded-r-full'
                /></div>
                <div className='md:w-[55%] w-[100%] md:p-10 p-5 h-auto bg-red-300 rounded-l-full md:absolute right-0 '>
                    <h1 className='text-white font-bold text-base md:text-2xl text-center px-8 md:p-3'>KINGS OF THE STREET COLLECTION</h1><hr className='hidden'/>
                    <h1 className='md:text-xl text-lg font-semibold text-center px-10 md:mt-0 mt-[5px] overflow-clip '>{title}</h1>
                   <div className='md:h-[100px]'><p className='text-[10px]  text-justify md:p-2 p-5 break-words overflow-clip'>{desc}</p></div>
                    <h1 className='text-3xl font-bold text-center md:pt-9 px-10 '>${pricing}</h1>
                    <p className='text-[10px]  text-center px-4'>(free delivery included for within US,NG,UK)</p>
                    <div className=' w-[100%] px-8 mx-auto my-3'>
                        <div className='mx-auto w-full px-10'><h1 className='font-bold text-center'>Shop Now!</h1></div>
                        </div>
                
                </div>
            </div></div>
  )
}

