import React, { useContext,useEffect } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar.component';
import Footercomponent from '../components/Footer/Footer.component';
const MovieLayout = (Component) => ({...props}) => {
  
    
  return (
    <>
      
        <Navbar />
        <Component {...props}></Component>
         <Footercomponent></Footercomponent>
      
    </>
  )
}

export default MovieLayout;
