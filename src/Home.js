import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/263/897/original/online-shopping-and-digital-marketing-concept-vector.jpg"
            //width="1022"
            //height="300"
            alt=""
            className="home_image"
          />
          <div className="home_row">
            <Product />
            <Product />
          </div>
          <div className="home_row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home_row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
