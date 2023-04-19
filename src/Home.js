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
            alt=""
            className="home_image"
          />
          <div className="home_row">
            <Product
              id="100000"
              title="BMW R1250 GS"
              price={11000.0}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            <Product
              id="100001"
              title="Triumph Bonneville Bobber"
              price={11500.0}
              rating={5}
              image="https://www.devittinsurance.com/wp-content/uploads/2019/10/Bobber_Black_hero_RHS-scaled.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id="100002"
              title="CCM Spitfire Brat"
              price={10000.0}
              rating={5}
              image="https://www.devittinsurance.com/wp-content/uploads/2019/10/CCM-Spitfire-brat-scaled.jpg"
            />
            <Product
              id="100003"
              title="Cafe Racer: Kawasaki Z900"
              price={12000.0}
              rating={5}
              image="https://www.devittinsurance.com/wp-content/uploads/2018/10/Z900RS-CAFE-Statics-4.jpg"
            />
            <Product
              id="100004"
              title="Chopper: Harley Davidson Low Rider 2020"
              price={12500.0}
              rating={5}
              image="https://www.devittinsurance.com/wp-content/uploads/2019/10/20_FXLRS_R_INT-scaled.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id="100005"
              title="Cruiser: Triumph Rocket III"
              price={15000.0}
              rating={5}
              image="https://www.devittinsurance.com/wp-content/uploads/2019/10/3892.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
