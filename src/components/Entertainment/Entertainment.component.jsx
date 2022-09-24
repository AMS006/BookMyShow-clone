import React from 'react'
import Slider from 'react-slick';
import EntertainmentCard from './EntertainmentCart.component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Grid} from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
const EntertainmentSlider =() =>{
       const EntertainmentImage = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTI1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
    ];
    const settings = {
        arrows: true,
        slidesToShow: 5,
        speed: 500,
        slideToScroll: 1,
        infinite:false,

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
                    slidesToScroll: 1,
                    initialSlide: 0,
                    arrows:false
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    arrows:false,
                    slidesToScroll: 1,
                    rows:2,
                    
                },
            },
        ],
      
    }
    return (
        <>
        {/* <Slider {...settings}>
            {EntertainmentImage.map((each,index) =>(
                <EntertainmentCard imgUrl = {each} key={index} / >
            ))}
        </Slider> */}
       <Swiper 
       slidesPerView={3}
       slidesPerGroup={3}
       spaceBetween={20}  
       modules={[Navigation]}
       navigation={true}
       
       breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup:2
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup:3,
          speed:1000
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup:4,
          speed:1500
        },
      }}
        // navigation={false} 
        
       >
            {EntertainmentImage.map((each,index) =>(
                <SwiperSlide>
                    <EntertainmentCard imgUrl = {each} key={index} />
                </SwiperSlide>
            ))}
       </Swiper>
        </>
    );
}
export default EntertainmentSlider;
