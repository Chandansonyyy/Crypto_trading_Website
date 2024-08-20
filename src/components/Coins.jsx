import React, { useState, useEffect } from 'react';
import { Baseurl } from './baseUrl';
import Loader from './Loader';
import axios from 'axios';
import './Coins.css';
import { Link } from 'react-router-dom';

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState('inr');
  const [search, setSearch] = useState('');

  const currencySymbol = currency === 'inr' ? '₹' : '$';

  useEffect(() => {
    const getCoinsData = async () => {
      const { data } = await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`);
      setCoins(data);
      setLoading(false);
    };
    getCoinsData();
  }, [currency]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search your coin"
              className="search-input"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="btns">
            <button className="btn" onClick={() => setCurrency('inr')}>INR</button>
            <button className="btn" onClick={() => setCurrency('usd')}>USD</button>
          </div>

          <div className="coins-table">
            <div className="table-header">
              <div className="header-cell">#</div>
              <div className="header-cell">Coin</div>
              <div className="header-cell">Price</div>
              <div className="header-cell">24h Change</div>
              <div className="header-cell">Market Cap</div>
            </div>
            {coins.filter((data) => {
              if (data === '') return data;
              if (data.name.toLowerCase().includes(search.toLowerCase())) return data;
              return null;
            }).map((coindata, i) => (
              <div key={coindata.id} className="table-row">
                <div className="row-cell">{i + 1}</div>
                <div className="row-cell">
                  <img src={coindata.image} alt={coindata.name} className="coin-logo" />
                  {coindata.name}
                </div>
                <div className="row-cell">{currencySymbol} {coindata.current_price}</div>
                <div className={`row-cell ${coindata.price_change_percentage_24h > 0 ? 'profit' : 'loss'}`}>
                  {coindata.price_change_percentage_24h > 0 ? `+${coindata.price_change_percentage_24h.toFixed(2)}` : coindata.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="row-cell">{currencySymbol} {coindata.market_cap.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Coins;
