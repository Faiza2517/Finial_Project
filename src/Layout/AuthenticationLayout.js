import React from 'react'
import{Header} from '../component/Header';
import { Outlet } from 'react-router-dom'

export const AuthenticationLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
