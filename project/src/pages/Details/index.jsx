import React from 'react'
import "./index.scss";
import { useParams } from 'react-router-dom'
import Stars from "../../assets/Frame 922.png"
import useFetchData from '../../hooks/UseFetchData';

const Detail = () => {
    const {id} = useParams()
    const {data} = useFetchData(`products/${id}`)

    return (
    <div className="productDetails">
          <div className="productDetails-inner">
            <div style={{width: "700px"}} className="details-img">
              <img style={{width: "80%", height: "80%"}} src={data.image} alt="" />
            </div>
            <div className="details-texts">
              <h1><b>{data.manufacturer}</b> {data.title}</h1>
              <img src={Stars} alt="" />
              <h2>{data.category}</h2>
              <p>{data.description}</p>
              <div className='flex gap-5'>
                <h5 style={{ padding: "10px 0" }}>${data.discountPrice}</h5>
                <span style={{ padding: "10px 0" }}>${data.price}</span>
              </div>
              <button>Buy</button>
            </div>
          </div>
        </div>
  )
}

export default Detail