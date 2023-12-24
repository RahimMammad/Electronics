import React from 'react'
import Filter from '../../components/Filter'
import "./index.scss"
import Iphone from "../../assets/Frame 560.png"
import Flash from "../../assets/Frame 727.png"

const Header = () => {
  return (
    <div className='header-main-container'>
      <Filter />
      <img src={Iphone} alt="" />
    </div>
  )
}

export default Header   