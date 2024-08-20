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
            <div className="hero-background"></div>
            <div className="hero-overlay">
              <div className="hero-text">
                <h1>Welcome to Crypto Trader</h1>
                <p>Your gateway to the world of cryptocurrency trading</p>
                <button className="hero-button">Get Started</button>
              </div>
            </div>
          </div>
          <h2 className="section-title">Top Cryptocurrency Exchanges</h2>
          <div className="exchanges-table">
            <div className="table-header">
              <div className="header-cell">#</div>
              <div className="header-cell">Name</div>
              <div className="header-cell">24h Volume (BTC)</div>
              <div className="header-cell">Country</div>
              <div className="header-cell">Year Established</div>
              <div className="header-cell">Trust Score</div>
              <div className="header-cell">Rank</div>
            </div>
            {exchanges.map((item, index) => (
              <div key={item.id} className="table-row">
                <div className="row-cell">{index + 1}</div>
                <div className="row-cell">
                  <img src={item.image} alt={item.name} className="exchange-logo" />
                  {item.name}
                </div>
                <div className="row-cell">{item.trade_volume_24h_btc.toFixed(2)} BTC</div>
                <div className="row-cell">{item.country || "N/A"}</div>
                <div className="row-cell">{item.year_established || "N/A"}</div>
                <div className="row-cell">{item.trust_score || "N/A"}</div>
                <div className="row-cell">{item.trust_score_rank}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Exchanges;
