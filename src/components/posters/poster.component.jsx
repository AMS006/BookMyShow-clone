import React from 'react'
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
export default function Poster(props) {
  return (
  // <SwiperSlide>
    <Link to={`/movie/${props.id}`}>
      <div className='flex flex-col gap-2 items-start  px-2' key={props.key} >
        <div className='lg:h-80 md:h-80 sm:h-80'>
          <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} className="h-full w-full rounded-md" alt='poster'/>
        </div>
        <h3 className={`fond-bold break-all   ${props.isDark?'text-white':'text-black'}`}>{props.title}</h3>
      </div>
    </Link>
  // </SwiperSlide>
  )
}
