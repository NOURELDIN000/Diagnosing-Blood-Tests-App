
import React, { useContext } from 'react'
import { User } from '../Context/Context'
import { Navigate, Outlet } from 'react-router';
import Cookie from "cookie-universal"
const RequireAuth = () => {
  const cookie = Cookie();
    const user = useContext(User);
    // const token = user.auth.token
    
    
  return  cookie.get("nour") ? <Outlet/> : <Navigate  to={'/login'}/>
  
}

export default RequireAuth

// user.auth.userDetails