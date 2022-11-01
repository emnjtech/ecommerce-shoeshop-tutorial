import React from 'react'
import HeroProduct from './HeroProduct'
import Product from './Product'

export default function Home() {
  return (
    <div>
        <div className='mb-auto h-auto'>
        <HeroProduct 
       
         title= "Hummel III"
         pricing="300"
         qty='1'
         image="https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
         desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         alt="shoe"
        
        />
        </div>

        <div class="  grid md:grid-cols-4 grid-cols-2 justify-between md:w-full px-10 mx-auto  gap-4 ">


                

                    <Product

                        title="Converse All Star"
    
                        pricing='300'
                        qty='31'
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80s"
   
                        alt="shoes"
                        
                    />
               

                <Product
                        title="Converse All Star"
                        pricing='300'
                        qty='31'
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80s"
                        alt="shoes"
                    />
               

                <Product

                        title="Converse All Star"
    
                        pricing='300'
                        qty='31'
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80s"
   
                        alt="shoes"
                        
                    />
               
                <Product
                        title="Converse All Star"
                        pricing='300'
                        qty='31'
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80s"
                        alt="shoes"
                    />
               
               <Product
                        title="Converse All Star"
                        pricing='300'
                        qty='31'
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80s"
                        alt="shoes"
                    />
               
               <Product
                        title="Converse All Star"
                        pricing='300'
                        qty='31'
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80s"
                        alt="shoes"
                    />
               
               <Product
                        title="Converse All Star"
                        pricing='300'
                        qty='31'
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80s"
                        alt="shoes"
                    />
               
               <Product
                        title="Converse All Star"
                        pricing='300'
                        qty='31'
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80s"
                        alt="shoes"
                    />
               
               
                
            </div>
         <div className='w-[15%] mx-auto  my-5'> <button className='mx-auto'>More</button></div>

</div>
  )
}
