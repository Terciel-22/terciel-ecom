import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';

export default function SellerLayout() {

  const {user,token} = useStateContext();
  if(!token)
  {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}