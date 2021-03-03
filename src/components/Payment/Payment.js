import React from 'react'
import { useStateValue } from '../../data/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { Link } from 'react-router-dom'
import './Payment.css'



export default function Payment() {

    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length}</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>1111 Laflin Road</p>
                        <p>Chicago</p>
                    </div>
                </div>
               
                <div className="payment_section">
                    <div className="paymenet_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map((item) => (
                             <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                        
                    </div>
                    
                  
                </div>

                <div className="payment_section">
                    <div className="paymenet_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
