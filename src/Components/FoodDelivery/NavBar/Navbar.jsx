import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'

export const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext);

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
            <img className='navbar-search-icon' src={assets.search_icon} alt="" />
            <div className="navbar-cart-icon">
                <Link to='/react-portfolio/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            <button onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}
