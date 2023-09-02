import React from 'react'
import { CiSearch } from "react-icons/ci";
import "./Header.css"

const Header = () => {
  return (
    <div className='navbar'>
        <div className="navbar_1">
            <p>Skin care</p>
            <p>Body & Hair</p>
            <p>Hair</p>
            <p>Fragnance</p>
            <p>Home</p>
            <p>Kits & travel</p>
            <p>Gifts</p>
            <p>Read</p>
            <p>Stores</p>
            <p>Facial Appointments</p>
             <p><CiSearch className='icon'/> </p>
        </div>

        <div className='navbar_1_1000'>
            <p>Shop</p>
        <p>Read</p>
            <p>Stores</p>
             <p><CiSearch className='icon'/> </p>
        </div>
        <div className="navbar_2">
            <p>Log in</p>
            <p>Cabinet</p>
            <p>Cart</p>
        </div>
      
    </div>
  )
}

export default Header
