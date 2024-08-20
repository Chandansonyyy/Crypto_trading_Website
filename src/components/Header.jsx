import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import './Header.css';
import { FaEthereum } from 'react-icons/fa';
import MetaMaskButton from './MetaMaskButton';

const Header = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  console.log('Is Authenticated:', isAuthenticated);
  console.log('User:', user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Crypto Trader <FaEthereum color='orange' /></h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/coins">Coins</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li>
          {isAuthenticated ? (
            <div className="user-info">
              {user.picture && <img src={user.picture} alt={user.name} className="user-avatar" />}
              <span>Welcome, {user.nickname}</span>
              <button 
                className="auth-button"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Log Out
              </button>
            </div>
          ) : (
            <button className="auth-button" onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </li>
        <MetaMaskButton />
      </ul>
    </div>
  );
}

export default Header;
