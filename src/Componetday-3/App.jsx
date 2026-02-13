import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet } from 'react-router-dom'
import RestaurantMenu from './RestaurantMenu'

function AppLayout() {
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>            
  )
}
export default AppLayout