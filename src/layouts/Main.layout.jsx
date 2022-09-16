import React from 'react'
import Footercomponent from '../components/Footer/Footer.component';
import Navbar from '../components/Navbar/Navbar.component'

const  MainLayoutHoc = (Component) =>({...props}) => {
    const logo = 'https://d35fo82fjcw0y8.cloudfront.net/2018/06/01005211/Bookmyshow-logo.png';
  return (
    <div>
        <Navbar logo={logo}/>
        <Component {...props} />
        <Footercomponent></Footercomponent>
    </div>
  )
}
export default MainLayoutHoc;