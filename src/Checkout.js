import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className='wraper'>
      <div className='checkout'>
        <div className='checkout__left'>
          <img
            src='images/ad_electric200px.jpg'
            alt=''
            className='checkout__ad'
          />
          <div className='checkout__section'>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
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
        <div className='checkout__right'>
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
