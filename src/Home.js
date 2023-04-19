import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://thumbs.dreamstime.com/b/motorbike-road-riding-having-fun-riding-empty-highway-motorcycle-tour-journey-motorbike-road-riding-having-184108376.jpg"
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
