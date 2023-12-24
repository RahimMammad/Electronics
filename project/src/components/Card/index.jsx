import React from 'react'
import "./index.scss"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Card = ({item}) => {
  return (
      <>
      <div className='background_img'style={{width:'270px',height:'250px'}}>
                <img src={item.image} alt="" style={{width:'210px',height:'180px'}}/>
                <button className='Allproducts_addtowishlist'><FaRegHeart /></button>
                <button className='Allproducts_seeDetails'><IoEyeOutline /></button>
                <button className='Allproducts_addtocard'>Add to card</button>
            </div>
            <div className='Allproducts-txt'>
              <h4><b><i>{item.manufacturer}</i></b> {item.title}</h4>
              <div className='prices'>
                <h2 style={{color:'#DB4444'}}>${item.discountPrice}</h2>
                <span style={{color:'#cfcfcf', textDecoration: "line-through"}}>${item.price}</span>
              </div>
            </div>
      </>
  )
}   

export default Card