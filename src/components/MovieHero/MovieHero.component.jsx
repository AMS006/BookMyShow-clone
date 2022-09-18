import React from 'react'
import { useContext } from 'react'
import { MovieContext } from '../../Context/Movie.context'
import PaymentModal from '../Payment/Payment.component';
import MovieInfo from './MovieInfo';


function MovieHero() {
    const {movie,rentMovie,buyMovie,isOpen,setIsOpen,price} = useContext(MovieContext);
    const movieGenere = movie.genres?.map(({name}) => name).join(" ");

   
    // console.log(movie.poster_path,movie.title,movie.backdrop_path);
  return (
    <>
    <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price = {price}></PaymentModal>
        <div className=' relative  hidden lg:block' style={{height:'30rem'}}>
            <div className='absolute  z-5 h-full w-full object-center object-cover' style={{backgroundImage:`linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)`}}/>
            <div className='absolute flex gap-10 z-10 left-20 top-10'>
                <div className='w-64 h-96'>
                    <img className='h-full w-full rounded-md' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='poster' ></img>
                </div>
                <div>
                    <MovieInfo></MovieInfo>
                </div>
            </div>
            <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="backgrop poster"
            className="w-full h-full  object-center"
          />
        </div> 
        <div className='block lg:hidden my-5'>
            <div className=' px-5'>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="rounded" alt="poster" />
            </div>
            <div className='flex my-4 flex-col px-5  gap-3 justify-center'>
                <p>4K Rating</p>
                <p>English, Hindi, Kannada, Tamil, Telugu</p>
                <p>{movie.runtime} | {movieGenere}</p>
            </div>
            <div className='my-5 px-5 flex gap-5'>
                <button onClick={rentMovie} className='bg-red-500 px-4 py-3 rounded font-bold text-white'>Rent ₹249</button>
                <button onClick={buyMovie} className='bg-red-500 px-4 py-3 rounded font-bold text-white'>Buy ₹999</button>
            </div>
        </div>
    </>
    )
}

export default MovieHero