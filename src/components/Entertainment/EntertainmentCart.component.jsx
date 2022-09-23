import React from 'react'
import { SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
const EntertainmentCard = (props) => {
    return (
            <div className="w-full h-30 py-3 px-2" key={props.key}>
                <img
                    className="w-full h-full rounded-xl"
                    src={props.imgUrl}
                    alt="entertainment"
                />
            </div>
    );
}
export default EntertainmentCard;
