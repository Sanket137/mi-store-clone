import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='hot-accessories-menu'>
        <Link className='hot-accessories-menu-link' to='/music'>Music Store</Link>
        <Link className='hot-accessories-menu-link' to='/devices'>Smart Devices</Link>
        <Link className='hot-accessories-menu-link' to='/home'>Home </Link>
        <Link className='hot-accessories-menu-link' to='/lifestyle'>Lifestyle</Link>
        <Link className='hot-accessories-menu-link' to='/accessories'>Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu