
import React, { useContext } from 'react'
import { User } from '../Context/Context'
import { Navigate, Outlet } from 'react-router';

const RequireAuth = () => {
    const user = useContext(User);
  return   user.auth.userDetails ? <Outlet/> : <Navigate  to={'/login'}/>
  
}

export default RequireAuth
