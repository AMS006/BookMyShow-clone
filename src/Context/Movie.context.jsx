import React, { createContext,useState } from 'react'

export const  MovieContext =  createContext();

function MovieProvider({children}) {
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: ""
  })
  const [isOpen,setIsOpen] = useState(false);
  const [price,setPrice] = useState(0);
  const rentMovie = () =>{
    setPrice(249);
    setIsOpen(true);
}
const buyMovie = () =>{
    setPrice(999);
    setIsOpen(true);
}
  return (
    <MovieContext.Provider value={{movie,setMovie,isOpen,setIsOpen,price,setPrice,rentMovie,buyMovie}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider;