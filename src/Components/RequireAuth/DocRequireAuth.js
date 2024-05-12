import React from 'react'

import { Navigate, Outlet } from 'react-router';
import Cookie from "cookie-universal"
const DocRequireAuth = () => {
  const cookie = Cookie();
   
    
  return  cookie.get("DocBearer") ? <Outlet/> : <Navigate  to={'/doctorlogin'}/>
  
}

export default DocRequireAuth
