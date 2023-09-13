import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='header_logo'>
          <img src='images/motorbike.svg' alt='' />
          <h2 className='header_logoTitle'>TRIUMPH WORLD</h2>
        </div>
      </Link>
      <div className='header_nav'>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <div className='nav_item'>
            <span className='nav_itemLineTwo'>Sigh In</span>
          </div>
        </Link>
        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          <div className='nav_itemBasket'>
            <img src='images/cart.png' alt='' />
            <span className='nav_itemLineTwo nav_basketCount'>
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
