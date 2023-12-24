import React from 'react'
import './index.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid,Autoplay } from 'swiper/modules';
import "swiper/css";
import useFetchData from '../../hooks/useFetchData';
import Card from '../Card';

const OurProducts = () => {
  const {data} = useFetchData("products")
  return (
    <section className='ourproducts'>
        <div className='ourproducts_container'>
        <div className='ourproducts_title'>
        <div className='ourproducts_title_left'>
           <div className='ourproducts_OURPROUCTS'>
            <span></span>
            <p>Our Products</p>
           </div>
           <div className='ourproducts_OURPROUCTS_title'>
              <h2>Explore Our Products</h2>
           </div>
        </div> 
        </div>
        <div className='ourproducts_products'>
        <Swiper slidesPerView={4} autoplay={{ delay: 2500, disableOnInteraction: false }} spaceBetween={50}    grabCursor={true}        modules={[Autoplay,Grid]} className="mySwiper" >
          {data && data.map((item)=>(
          <SwiperSlide className='ourproducts_cards' >
            <Card key={item.id} item={item} />
          </SwiperSlide>
          ))}
        </Swiper>
        </div>
        </div>
    </section>
  )
}

export default OurProducts