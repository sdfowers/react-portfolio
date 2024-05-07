import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

export const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
        <Link to='/react-portfolio'><img src={assets.logo} alt='' className='logo'/></Link>
        <ul className="navbar-menu">
            <Link to='/react-portfolio' onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='/react-portfolio#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='/react-portfolio#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
            <a href='/react-portfolio#footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/react-portfolio/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className="dot"></div>
            </div>
            <button onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}
