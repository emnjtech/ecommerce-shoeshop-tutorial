import React from 'react'
import { Icon } from '@iconify/react';

export default function Header() {
  return (
<>
    <div className='md:hidden flex w-[90%] mx-5 h-8 bg-red-200 my-2 rounded-full'>
            <div className=' flex w-full '>
                <input type='text' className='w-full text-[13px] bg-red-200 p-4 rounded-full outline-none md:rounded-full
                focus:border-[0px] box-border md:border-[0px]' />

            </div>
            <div className='h-full w-17 bg-red-200 rounded-full flex items-center p-1'>
            <Icon icon="el:search-alt" className='text-2xl'/>
            </div>
        </div>
    <div className=' w-full h-[70px] shadow-2xl bg-red-700'>
        <div className='px-4 flex md:justify-between justify-start items-center h-full w-full'>
            <div className='flex mr-[10px]  items-center'>
                  <Icon icon="la:shoe-prints" className=' font-bold text-2xl  md:text-4xl text-white'/>
                  <h1 className='md:text-lg text-sm font-bold md:font-bold text-white'>The ShoeShop</h1>
             </div>
        

        <div className='hidden md:flex w-[40%]  md:bg-red-200 bg-transparent h-[40px] my-4 rounded-full'>
            <div className=' flex w-full md:w-full '>
                <input type='text' className='md:w-full text-[13px] bg-red-200 p-4 rounded-full outline-none md:rounded-full
                focus:border-[0px] box-border md:border-[0px]' />

            </div>
            <div className='h-full w-17 bg-red-200 rounded-full flex items-center p-1'>
            <Icon icon="el:search-alt" className='text-3xl'/>
            </div>
        </div>


        <div className='hidden md:flex pr-4'>
        <ul className='hidden md:flex  mr-6 text-[12px] font-bold text-white'>
                            <li>Home</li>
                        <li>Shop Sneakers</li>
                        <li>Leather Shoes</li>
                        <li>New Arrivals</li>
                          
                        </ul>  
        </div>
        <div className='h-full flex items-center ml-auto' >
                  <div>
                    <h1 className='text-[11px] text-yellow-400 font-semibold'>My Account</h1>
                  </div>
        
                  <div className='relative'>
                     <Icon icon="ion:cart-outline" className='text-4xl text-yellow-400' />
                

                  </div>
                  <div className='absolute right-[30px] top-[72px] md:top-[24px] '>
                    <h1 className='text-[10px] text-white'>0</h1>
                  </div>
        </div>


        </div>

        

        <div>
               <ul className='absolute z-10 right-0 bg-red-700 w-auto rounded-bl-full h-auto pb-20 px-6 text-sm  text-white md:hidden '>
                       <li className='py-1'>Home</li>
                      <li className='py-1'>Shop Sneakers</li>
                       <li className='py-1'>Leather Shoes</li>
                       <li className='py-1'>New Arrivals</li>
               </ul>

        </div>
    </div>


    </>    
  )
}
