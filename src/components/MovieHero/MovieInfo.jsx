import React from 'react'
import { useContext } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { MovieContext } from '../../Context/Movie.context';
import PaymentModal from '../Payment/Payment.component';

function MovieInfo() {
    const { movie,price, setIsOpen, isOpen, rentMovie, buyMovie } =
    useContext(MovieContext);
    const movieGenere = movie.genres?.map(({name}) => name).join(" ");
  return (
    <div>
        <div className='flex  flex-col gap-10 z-5 text-white'>
            <h1 className='font-bold text-5xl'>{movie.title}</h1>
            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-xl'>4k Ratings</h3>
                <p>English, Hindi, Kannada, Tamil, Telugu</p>
                <p className='font-bold '>{movie.runtime} min  |  {movieGenere} </p>
            </div>
            <div className='my-8 flex gap-5'>
                <button onClick={rentMovie} className='bg-red-500 px-4 py-3 rounded font-bold'>Rent ₹249</button>
                <button onClick={buyMovie} className='bg-red-500 px-4 py-3 rounded font-bold'>Buy ₹999</button>
            </div>
        </div>
    </div>
  )
}

export default MovieInfo