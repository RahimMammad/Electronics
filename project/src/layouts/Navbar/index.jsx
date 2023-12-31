import React from 'react'
import "./index.scss"
import { Link } from "react-router-dom"
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav>
        <div className='navbar-main-container'>
            <ul className='navbar'>
                <Link to={"/"}><h2>Exclusive</h2></Link>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/signup"}>Sign Up</Link></li>
            </ul>
            <div className='nav-other'>
                <div className='search'>
                    <input type="text" placeholder='What are you looking for?' />
                    <HiMagnifyingGlass id='magnify' />
                </div>
                <Link to={"/wishlist"}><CiHeart id='heart'></CiHeart></Link>
                <Link><CiShoppingCart id='basket' /></Link>
                <Link><CiUser id='user' /></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar