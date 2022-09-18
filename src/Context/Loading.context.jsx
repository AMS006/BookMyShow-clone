import React, { createContext, useState } from 'react'
export const LoadingContext = createContext();
function LoadingProvider({children}) {
    const [load,setLoad] = useState(false);
    const [progress,setProgress] = useState(0);
  return (
    <div>
      <LoadingContext.Provider value={{load,setLoad,progress,setProgress}}>
            {children}
      </LoadingContext.Provider>
    </div>
  )
}

export default LoadingProvider
