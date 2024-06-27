import React from 'react'
import "./Product.css"

function Product(props){
    const {img, title, showMore}=props.data;
  return (
    <div className="product">
        <h1>{title}</h1>
      <img src={img} alt="" />
      <span>{showMore}</span>
    </div>
  )
}

export default Product;
