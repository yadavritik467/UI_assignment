import React from 'react'
import {AiOutlineArrowRight, AiOutlineHeart} from "react-icons/ai"
import {RxHamburgerMenu} from "react-icons/rx"
import "./Home.css"
import { CiSearch } from 'react-icons/ci'
const Home = () => {
  return (
 <>
    <div className='home'> 
    <div className="home_nav_responsive">
        <div>Aesop. </div>
        <div>
        <p><CiSearch className='icon'/> </p>
        <p><AiOutlineHeart className='icon'/> </p>
        <p>Cart </p>
        <p> <RxHamburgerMenu className='icon'/> </p>
        </div>
    </div>
        <div className="home_container">
        <div className='home_1'>
            Aesop.
        </div>
        {/* <p>Aesop</p> */}
        
        <div className='home_2'>
            <p>Bar Soaps</p> <br />
            <h2>A body care classic, reimagined </h2> <br />
            <p>Breathing new life into the humble bar <br /> soap are Nurture, Polish and Refresh— <br /> three additions to the range, each <br /> imparting a unique constellation of benefits. </p> <br />
            <div className="button">
                <p>Discover Bar Soaps</p>
                <p><AiOutlineArrowRight/> </p>
            </div>
        </div>
        </div>
      
    </div>
    <div className="home_container_1">
        <div className='home_1_child'>
            Aesop.
        </div>
        {/* <p>Aesop</p> */}
        
        <div className='home_2_child'>
            <p>Bar Soaps</p> <br />
            <h2>A body care classic, reimagined </h2> <br />
            <p>Breathing new life into the humble bar <br /> soap are Nurture, Polish and Refresh— <br /> three additions to the range, each <br /> imparting a unique constellation of benefits. </p> <br />
            <div className="button">
                <p>Discover Bar Soaps</p>
                <p><AiOutlineArrowRight/> </p>
            </div>
        </div>
        </div>
 </>
  )
}

export default Home
