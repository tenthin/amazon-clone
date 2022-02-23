import React from 'react'
import './Product.css'

function Product({ id, title, price, rating, image}) {
  return (
    <div className="product">
        <p>{title}</p>
        <p className='product__'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
    </div>
  )
}

export default Product