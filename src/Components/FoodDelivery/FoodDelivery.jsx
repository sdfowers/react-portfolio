import React from 'react'
import { Navbar } from './NavBar/Navbar'
import { Home } from './Pages/Home/Home'
import './FoodDelivery.css'
import StoreContextProvider from './Context/StoreContext'

export const FoodDelivery = () => {
  return (
    <div className='food-delivery'>
        <Navbar></Navbar>
        <StoreContextProvider>
          	<Home></Home>
        </StoreContextProvider>
    </div>
  )
}
