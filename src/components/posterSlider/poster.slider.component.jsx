import React from 'react'
import Slider from 'react-slick';
import Poster from '../posters/poster.component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
export default function PosterSlider(props) {
    const view = props.moviePage === true ? 4 : 5;
    console.log(view);
    const settings = {
        arrows: true,
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 5,
        infinite:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:2,
                    arrows:false
                },
            },
            
        ],
      
    }
    const newSettings = props.movieSettings ? props.movieSettings : settings;
  return (
    <>
        <div className='flex flex-col gap-2 items-start my-3'>
            <h1 className={`font-bold text-2xl ${props.isDark?'text-white':'text-black'}`}> {props.title}</h1>  
            <p className={`mb-2 ${props.isDark?'text-white':'text-black'} `}>{props.subtitle}</p>
        </div>
        {/* <Slider {...newSettings}>
            {props.posters.map((each,index) =>( <Poster {...each} isDark={props.isDark} key={index}></Poster>))}
        </Slider> */}
        <Swiper 
        slidesPerView={3}
        navigation={true} 
        spaceBetween={10}
        modules={[Navigation]}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup:2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup:3,
              modules:[Navigation]
            },
            1024: {
              slidesPerView: view,
              spaceBetween: 20,
              slidesPerGroup:5,
              modules:[Navigation],
              speed:1500
            },
          }}
        >
            {props.posters.map((each,index) =>( 
                <SwiperSlide style={props.isDark?{backgroundColor:'#2b3147'}:null}>
                
                    <Poster {...each} isDark={props.isDark} key={index}></Poster>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  )
}
