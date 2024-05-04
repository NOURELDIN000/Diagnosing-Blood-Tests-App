import React from 'react'
import Cookie from "cookie-universal"
import { Navigate, Outlet } from 'react-router';

function PersistLogin ()   {

    const cookie = Cookie();

  return  cookie.get("nour") ? <Outlet/> : <Navigate to={'/login'} />
    
    
  
}

export default PersistLogin
