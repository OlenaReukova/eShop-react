import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct() {
  return (
    <div className='checkoutProduct'>
      <img
        src='https://imotorbike.my/news/wp-content/uploads/2021/03/Project-Triumph-TE1-design-2.jpg'
        alt=''
        className='checkoutProduct__image'
      />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>Triumph TE-1 electric</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className='checkoutProduct__rating'>⭐⭐</div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
