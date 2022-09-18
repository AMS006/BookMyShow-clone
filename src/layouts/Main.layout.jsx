import React from 'react'
import Navbar from '../components/Navbar/Navbar.component'
import NavbarBt from '../components/Navbar/NavbarBt';
const  MainLayoutHoc = (Component) =>({...props}) => {
    const logo = 'https://d35fo82fjcw0y8.cloudfront.net/2018/06/01005211/Bookmyshow-logo.png';
  return (
    <div>
        <Navbar logo={logo}/>
        <NavbarBt></NavbarBt>
        <Component {...props} />
    </div>
  )
}
export default MainLayoutHoc;