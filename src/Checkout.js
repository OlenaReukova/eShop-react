import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://imotorbike.my/news/wp-content/uploads/2021/03/Project-Triumph-TE1-design-2.jpg'
          alt=''
          className='checkout__ad'
        />
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          <CheckoutProduct />
          <CheckoutProduct />
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
