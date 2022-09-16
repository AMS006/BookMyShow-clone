import React, { createContext, useState } from 'react'
export const LoadingContext = createContext();
function LoadingProvider({children}) {
    const [load,setLoad] = useState(false);
  return (
    <div>
      <LoadingContext.Provider value={{load,setLoad}}>
            {children}
      </LoadingContext.Provider>
    </div>
  )
}

export default LoadingProvider
