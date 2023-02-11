import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

export default function CustomerLayout() {

  const {user,token} = useStateContext();
  if(!token)
  {
    return <Navigate to="/login" />
  }

  return (
    <div>
      Customer
      <Outlet />
    </div>
  )
}