import React from 'react';
import CurrencyFormat from "react-currency-format";
import './Subtotal.css';
import { useStateValue } from '../../data/StateProvider'
import { getBasketTotal } from '../../data/reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory()
    const [{basket}, dispatch] = useStateValue()
    console.log(basket)
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )} 
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button> 
            {/* keep the origin style of the button instead of looking like a link */}
        </div>
    )
}

export default Subtotal
