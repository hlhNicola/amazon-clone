import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Product.css'

function Product({title, image, price, rating}) {
    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price} </strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((item, index) => (
                       <StarIcon></StarIcon>
                    ))}
                </div>
                
            </div>
            <img src={image} alt="image1"/>
            <button>add to Basket</button>
            
        </div>
    )
}

export default Product


