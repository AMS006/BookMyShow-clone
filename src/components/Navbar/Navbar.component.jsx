import React from 'react'
import { BiChevronDown, BiMenu, BiSearch } from 'react-icons/bi'
import bookmyShow from './bookmyShow.png'
function NavbarLg(props) {
  return (
    <>
     <div className='  text-white container mx-auto flex justify-between' >
        <div className='left-part w-1/2 flex gap-2 justify-between items-center '>
            <div className='w-2/5'>
                <img src={bookmyShow} className='h-full w-full object-covered' alt="logo" />
            </div>
            <div className='w-full flex items-center gap-3 bg-white text-gray-500  px-2 py-2 rounded-md '>
                <BiSearch />
                <input type="search" placeholder='Search for Movies, Sports , Plays, Events and activities' className='w-full h-full items-center text-sm  focus:outline-none rounded'/>
            </div>
        </div>
        <div className='right-part w-3/5 mx-2 flex gap-5 items-center justify-end'>
            <div className='flex items-center gap-1 text-lg'>
                <h6>Mumbai</h6>
                <BiChevronDown />
            </div>
            <div>
                <button className='bg-red-500 px-3 py-1 rounded'>Sign in</button>
            </div>
            <div className='text-3xl'>
                <BiMenu/>
            </div>
            <div>
                
            </div>
        </div>
    </div>
    </>
  )
}
function NavbarMd(){
    
    return (
       <>
        <div className='text-white py-3 px-3 container mx-auto flex justify-between items-center'>
            <div className='left-part'>
                <h3 className='text-bold text-2xl'>It All Starts Here!</h3>
                <div className='flex items-center gap-1 text-sm'>
                <h6>Mumbai</h6>
                <BiChevronDown />
            </div>
            </div>
            <div className='right-part flex items-center gap-3'>
                <div>
                    <button className='bg-red-500 py-1 px-2 rounded' onClick={() => window.location.href='https://play.google.com/store/apps/details?id=com.bt.bms&utm_source=bms_useapp&utm_medium=mweb&utm_campaign=installs'}>Use App</button>
                </div>
                <div className='text-3xl text-gray-400'>
                    <BiSearch/>
                </div>
            </div>
        </div>
       </>
    )
}
export default function Navbar(){
    return (
        <div className='bg-premier-800'>
           <div className='hidden lg:block'>
                <NavbarLg />
           </div>
           <div className='block lg:hidden'>
            <NavbarMd />
           </div>
        </div>
        
    )
}

