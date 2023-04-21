import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="images/Bobber_Black_hero.png"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="TRIUMPH BONNEVILLE AMERICA LT"
            price={12995.0}
            rating={5}
            image="images/bonnevilleamerica1.png"
          />
          <Product
            id="49538094"
            title="TRIUMPH BONNEVILLE T120 GOLD"
            price={13100.0}
            rating={4}
            image="images/Triumph Bonneville T120 Gold .png"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="STREET SCRAMBLER TRIUMPH"
            price={12000.0}
            rating={3}
            image="images/Street Scrambler Gold.png"
          />
          <Product
            id="23445930"
            title="TRIUMPH BOBBER GOLD"
            price={12000.0}
            rating={5}
            image="images/Triumph Bobber Gold.jpg"
          />
          <Product
            id="3254354345"
            title="TTHRUXTON RS CHROME"
            price={14500.0}
            rating={4}
            image="images/thruxton-rs-chrome.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="TRIUMPH BONNEVILLE T100"
            price={12900.0}
            rating={4}
            image="images/T100-Blue-LHS-800x560.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
