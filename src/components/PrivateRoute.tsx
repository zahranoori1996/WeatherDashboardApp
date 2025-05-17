import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
    const isLogin = true;
  return (
    <>
      {
        isLogin ? <Outlet /> :  <Navigate to="/login"></Navigate>
      }
    </>
  )
}

export default PrivateRoute
