import React from 'react'

const EntertainmentCard = (props) => {
    return (
        <>
            <div className="w-full h-30 px-2" key={props.key}>
                <img
                    className="w-full h-full rounded-xl"
                    src={props.imgUrl}
                    alt="entertainment"
                />
            </div>
        </>
    );
}
export default EntertainmentCard;
