import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className="product_info">
                <p>placeholder</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99 </strong>
                </p>
                <div className="product_rating">
                    <StarIcon className='star_icon'></StarIcon> 
                    <StarIcon className='star_icon'></StarIcon>
                    <StarIcon className='star_icon'></StarIcon>   
                </div>
            </div>
            <button>add to Basket</button>
            
        </div>
    )
}

export default Product


