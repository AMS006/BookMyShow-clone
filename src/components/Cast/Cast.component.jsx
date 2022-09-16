import React from 'react'

function Cast(props) {
  return (
    <div className='px-5 flex flex-col items-center'>
        <div className='h-32 w-32'>
            <img src={`https://image.tmdb.org/t/p/original${props.img}`} className="h-full w-full rounded-full object-center " alt="Profile Picture" />
        </div>
        <div>
            <h2 className='my-2'>{props.name}</h2>
            <p className='text-sm text-gray-500'>{props.profile}</p>
        </div>
    </div>
  )
}

export default Cast