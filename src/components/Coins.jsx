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

          <div className="coins-container">
            {coins.filter((data) => {
              if (data === '') return data;
              if (data.name.toLowerCase().includes(search.toLowerCase())) return data;
              return null;
            }).map((coindata, i) => (
              <CoinCard key={i} coindata={coindata} id={coindata.id} currencySymbol={currencySymbol} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

const CoinCard = ({ coindata, currencySymbol, id }) => {
  const profit = coindata.price_change_percentage_24h > 0;

  return (
    <Link to={`/coins/${id}`} className="coin-card">
      <div className="image">
        <img src={coindata.image} alt={coindata.name} />
      </div>
      <div className="name">{coindata.name}</div>
      <div className="price">{currencySymbol} {coindata.current_price}</div>
      <div className={`rank ${profit ? 'profit' : 'loss'}`}>
        {profit ? `+${coindata.price_change_percentage_24h.toFixed(2)}` : coindata.price_change_percentage_24h.toFixed(2)}%
      </div>
    </Link>
  );
};

export default Coins;
