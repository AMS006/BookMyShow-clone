import React from 'react'
import {Link} from 'react-router-dom'
import homeLogo from './homeLogo.png'
function NavbarBtLg(){
    return(
        <>
            <div className='flex gap-8 px-10 py-2 items-center'>
            <Link to={'/'}>Home</Link> 
              <Link to={'/movies'}>Movies</Link> 
              <Link to={'/plays'}>Plays</Link> 
              <Link to={'/shows'}>Shows</Link> 
              <Link to={'/stream'}>Streams</Link> 
            </div>
        </>
    )
}
function NavbarBtMd(){
    return(
        <>
            <div className='flex gap-3'>
            <Link to ={'/'}>
                    <img src={homeLogo} className='w-8 mt-1' alt="Movies" />
                    <h3 className='text-sm mt-2'>Home</h3>
                </Link>
                <Link to ={'/movies'}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-movies-collection-202201201113.png" className='w-24' alt="Movies" />
                </Link>
                <Link to ={'/plays'}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-plays-collection-202201201113.png" className='w-24' alt="Movies" />
                </Link>
                <Link to ={'/stream'}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-stream-collection-202201201113.png" className='w-24' alt="Movies" />
                </Link>
                <Link to ={'/shows'}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-music-shows-collection-202201201113.png" className='w-24' alt="Movies" />
                </Link>
            </div>
        </>
    )
}
function NavbarBt() {
  return (
    <>
    <div className='sticky top-0  z-20 bg-slate-900 hidden lg:block text-gray-200 w-full h-30'>
      <NavbarBtLg />
    </div>
    <div className='block lg:hidden my-2 px-2 py-2'>
        <NavbarBtMd></NavbarBtMd>
    </div>
    </>
  )
}

export default NavbarBt
