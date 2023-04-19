import React from "react";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">{price}</p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt=""></img>
        <button>Add to busket</button>
      </div>
    </div>
  );
}
export default Product;
