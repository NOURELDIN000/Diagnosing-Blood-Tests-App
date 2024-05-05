
import React, { useContext } from 'react'
import { User } from '../Context/Context'
import { Navigate, Outlet } from 'react-router';
import Cookie from "cookie-universal"
const RequireAuth = () => {
  const cookie = Cookie();
    const userNow = useContext(User);
    // const token = userNow.auth.token
    
    
  return  cookie.get("nour") ? <Outlet/> : <Navigate  to={'/login'}/>
  
}

export default RequireAuth

// user.auth.userDetails