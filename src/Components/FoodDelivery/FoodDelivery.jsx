import React, { useState } from 'react'
import { Navbar } from './NavBar/Navbar'
import { Home } from './Pages/Home/Home'
import './FoodDelivery.css'
import StoreContextProvider from './Context/StoreContext'
import Footer from './Footer/Footer'
import LoginPopup from './LoginPopup/LoginPopup'

export const FoodDelivery = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
      <div className='food-delivery'>
          <Navbar setShowLogin={setShowLogin}></Navbar>
          <StoreContextProvider>
              <Home></Home>
          </StoreContextProvider>
          <Footer></Footer>
      </div>
    </>
  )
}
