import React, { useContext } from 'react'
import "./index.scss"
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom"
import { BasketContext } from '../../context/BasketContext';
import Swal from 'sweetalert2';

const Card = ({item}) => {
  const navigate = useNavigate();
  const {basketArr, setBasketArr} = useContext(BasketContext);

  const addToCart = (item) => {
    const find = basketArr.find((x) => x.id === item.id);
    if (find) {
      find.count++;
      find.total = find.discountPrice * find.count;
      setBasketArr([...basketArr]);

      Swal.fire({
        title: "Already In Cart!!! Count Increased",
        icon: "warning",
      });
      return;
    }
    Swal.fire({
      title: "Added To Cart!",
      icon: "success",
    });
    const total = item.discountPrice;
    setBasketArr([...basketArr, { ...item, count: 1, total }]);
  }

  return (
      <>
      <div className='background_img'style={{width:'270px',height:'250px'}}>
                <img src={item.image} alt="" style={{width:'210px',height:'180px'}}/>
                <button className='Allproducts_addtowishlist'><FaRegHeart /></button>
                <button onClick={() => navigate(`/products/${item.id}`)} className='Allproducts_seeDetails'><IoEyeOutline /></button>
                <button onClick={() => addToCart(item)} className='Allproducts_addtocard'>Add to card</button>
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