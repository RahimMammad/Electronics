import React from 'react'
import "./index.scss"
import { FaAngleRight } from "react-icons/fa";

const Filter = () => {
  return (
    <div className='filter-main-container'>
        <div className='filter'>
            <div className='filter-choice'>
                <span>Woman's Fashion</span>
                <FaAngleRight id='faAngel'/>
            </div>
            <div className='filter-choice'>
                <span>Men's Fashion</span>
                <FaAngleRight id='faAngel'/>
            </div>
            <div className='filter-choice'>
                <span>Electronics</span>
                <FaAngleRight id='faAngel'/>
            </div>
            <div className='filter-choice'>
                <span>Home & Lifestyle</span>
                <FaAngleRight id='faAngel'/>
            </div>
            <div className='filter-choice'>
                <span>Medicine</span>
                <FaAngleRight id='faAngel'/>
            </div>
            <div className='filter-choice'>
                <span>Sports & Outdoor</span>
                <FaAngleRight id='faAngel'/>
            </div>
            <div className='filter-choice'>
                <span>Baby's & Toys</span>
                <FaAngleRight id='faAngel'/>
            </div>
            <div className='filter-choice'>
                <span>Groceries & Pets</span>
                <FaAngleRight id='faAngel'/>
            </div>
            <div className='filter-choice'>
                <span>Health & Beauty</span>
                <FaAngleRight id='faAngel'/>
            </div>
        </div>
    </div>
  )
}

export default Filter