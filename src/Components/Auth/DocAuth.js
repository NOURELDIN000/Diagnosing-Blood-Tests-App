import { createContext, useState } from "react";

export const Doctor = createContext({});


const DocProvider = ({children}) => {
    const [auth, setAuth] = useState({});
  return (
    <Doctor.Provider value={{auth,setAuth}}>
      {children}
    </Doctor.Provider>
  )
}

export default DocProvider

