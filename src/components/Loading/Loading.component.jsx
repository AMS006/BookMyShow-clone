import React from 'react'
import loadingimg from '../../loading.gif';
function Loading() {
  return (
    <div className='my-8 flex justify-center items-center w-full  ' style={{height:'50px'}}>
      <img src={loadingimg} alt="Working on it..." />
    </div>
  )
}

export default Loading