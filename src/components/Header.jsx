import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaEthereum } from 'react-icons/fa';
import MetaMaskButton from './MetaMaskButton';

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Crypto Trader <FaEthereum color='orange' /></h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/coins">Coins</Link></li>
        <li><Link to="/contact-us">ContactUs</Link></li>
        <li><Link to="/about-us">AboutUs</Link></li>
        <MetaMaskButton />
      </ul>
      
    </div>
  );
}

export default Header;
