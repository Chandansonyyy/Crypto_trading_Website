import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Baseurl } from './baseUrl';
import Loader from './Loader';
import Footer from './Footer.jsx';
import './Exchanges.css';

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const getExchangesData = async () => {
      const { data } = await axios.get(`${Baseurl}/exchanges`);
      setExchanges(data);
      setLoading(false);
    };
    getExchangesData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="exchanges-page">
          <div className="hero-section">
            <div className="hero-text">
              <h1>Welcome to Crypto Trader</h1>
              <p>Your gateway to the world of cryptocurrency trading</p>
              <button className="hero-button">Get Started</button>
            </div>
          </div>
          <div className="features-section">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-card">
                <img src="/image1.jpg" alt="Secure Transactions" />
                <h3>Secure Transactions</h3>
                <p>Experience safe and secure transactions with our advanced security protocols.</p>
              </div>
              <div className="feature-card">
                <img src="/image2.jpg" alt="Real-Time Data" />
                <h3>Real-Time Data</h3>
                <p>Get real-time data and updates to make informed trading decisions.</p>
              </div>
              <div className="feature-card">
                <img src="/image3.avif" alt="User-Friendly Interface" />
                <h3>User-Friendly Interface</h3>
                <p>Enjoy a seamless trading experience with our user-friendly interface.</p>
              </div>
            </div>
          </div>
          <h2 className="section-title">Top Cryptocurrency Exchanges</h2>
          <div className="exchanges-grid">
            {exchanges.map((item, i) => (
              <div key={i} className="ex-card">
                <div className="ex-card-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="ex-card-content">
                  <div className="ex-card-name">{item.name}</div>
                  <div className="ex-card-volume">Volume: {item.trade_volume_24h_btc.toFixed(2)} BTC</div>
                  <div className="ex-card-rank">Rank: {item.trust_score_rank}</div>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      )}
    </>
  );
};

export default Exchanges;
