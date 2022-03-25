import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let Total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        Total = Total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((Total * 0.1).toFixed(2));
    const grandTotal = Total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected Item:{cart.length}</p>
            <p>Total Price:${Total} </p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <h5>Grand Total:${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;