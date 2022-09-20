import React from 'react'
import Slider from 'react-slick';
import Poster from '../posters/poster.component';
export default function PosterSlider(props) {
    const settings = {
        arrows: true,
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 5,
        infinite:false,
        // initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    swipeToSlide:true,
                    arrows:false,
                    // initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows:false,
                    slidesToShow: 3,
                    arrows:false,
                    swipeToSlide:true

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
        <Slider {...newSettings}>
            {props.posters.map((each,index) =>( <Poster {...each} isDark={props.isDark} key={index}></Poster>))}
        </Slider>
    </>
  )
}
