import React from "react";
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>Title</p>
          <p className="product_price">£30</p>
          <div className="product_rating">****</div>
        </div>
        <img
          src="https://www.devittinsurance.com/wp-content/uploads/2019/06/P90322808_highRes_bmw-r-1250-gs-cosmic-scaled.jpg"
          alt="product_img"
        ></img>
        <button>Add to busket</button>
      </div>
    </div>
  );
}
export default Product;
