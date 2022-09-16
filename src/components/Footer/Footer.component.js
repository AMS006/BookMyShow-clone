import React from 'react'
import { useContext } from 'react';
import { LoadingContext } from '../../Context/Loading.context';

function Footercomponent() {
    const {load} = useContext(LoadingContext);
  return (
    <>
    {load && <div>
      Footer
    </div>}
    </>
  )
}

export default Footercomponent;
