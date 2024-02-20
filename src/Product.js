import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating) //rating on the webpage dinamically filled
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Add to busket</button>
    </div>
  );
}
export default Product;
