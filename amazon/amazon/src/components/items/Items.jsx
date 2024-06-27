import React from 'react'
import { PRODUCTS } from '../../PRODUCTS';
import Product from '../product/Product';
import "./Items.css"

function Items() {
  return (
    <div className="items">
      {
        PRODUCTS.map((item)=><Product data={item}/>)
      }
    </div>
  )
}

export default Items;
