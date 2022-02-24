import React from 'react'
import './Product.css'

function Product({ id, title, price, rating, image}) {
    
    const addToBasket = () => {

    }

  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>🌟</p>
                    ))
                }
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product;