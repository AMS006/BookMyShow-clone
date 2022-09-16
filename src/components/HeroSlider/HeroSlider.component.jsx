import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

export default function HeroSliderComponent() {

    const [images, setimages] = useState([
        "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
        "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
        "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
        "/xfNHRI2f5kHGvogxLd0C5sB90L7.jpg",
        "/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
        "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
    ])
   const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    centerMode:true,
    centerPadding: "200px",
    speed: 500,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,

    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images,index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images,index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};