import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import axios from 'axios';
import { Baseurl } from './baseUrl';
import { useParams } from 'react-router-dom';
import './CoinDetails.css';
import { BiSolidChevronUpCircle, BiSolidChevronDownCircle } from "react-icons/bi";
import { TbWaveSine } from "react-icons/tb";
import CoinChart from './CoinChart';

const CoinDetail = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState('inr');
  const { id } = useParams();

  const currencySymbol = currency === 'inr' ? '₹' : '$';
  const profit = coin.market_data?.price_change_percentage_24h > 0;

  useEffect(() => {
    const getCoin = async () => {
      try {
        const { data } = await axios.get(`${Baseurl}/coins/${id}`);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCoin();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="coin-detail">
          <div className="coin-info">
            <div className="btn-group">
              <button className={`btn ${currency === 'inr' ? 'active' : ''}`} onClick={() => setCurrency('inr')}>INR</button>
              <button className={`btn ${currency === 'usd' ? 'active' : ''}`} onClick={() => setCurrency('usd')}>USD</button>
            </div>
            <div className="coin-overview">
              <div className="coin-image">
                <img src={coin.image?.large} alt={coin.name} />
              </div>
              <div className="coin-details">
                <div className="coin-name">{coin.name}</div>
                <div className="coin-price">{currencySymbol}{coin.market_data?.current_price[currency]}</div>
                <div className={`coin-profit ${profit ? 'profit' : 'loss'}`}>
                  {profit ? <BiSolidChevronUpCircle /> : <BiSolidChevronDownCircle />} {coin.market_data?.price_change_percentage_24h}%
                </div>
                <div className="market-rank">
                  <TbWaveSine color='orange' /> Rank # {coin.market_cap_rank}
                </div>
                <div className="coin-desc">
                  <p>{coin.description?.en?.split('.')[0]}.</p>
                </div>
              </div>
            </div>
            <div className="last-updated">
              <p>Last Updated: {new Date(coin.last_updated).toLocaleString()}</p>
            </div>
          </div>
          <CoinChart currency={currency} />
        </div>
      )}
    </>
  );
};

export default CoinDetail;
