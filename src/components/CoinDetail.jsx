import React from 'react'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import axios from 'axios'
import { Baseurl } from './baseUrl'
import { useParams } from 'react-router-dom'
import './CoinDetails.css'
import { BiColorFill, BiSolidChevronUpCircle } from "react-icons/bi";
import { BiSolidChevronDownCircle } from "react-icons/bi";
import { TbWaveSine } from "react-icons/tb";

import coinImage from '../eth2.png'
import CoinChart from './CoinChart'

const CoinDetail = () => {

  const[coin, setCoin] = useState([])
const[loading, setLoading] = useState(true);

const[currency, setCurrency]=useState('inr')

const currencySymbol = currency==='inr'?'₹' : '$'

  const {id} = useParams();

  const profit = coin.market_data?.price_change_percentage_24h
>0 
    useEffect(()=>{

      const getCoin = async()=>{
        try{
            const {data}= await axios.get(`${Baseurl}/coins/${id}`)
            console.log(data);
            setLoading(false)
            setCoin(data)
        }
        catch(error){
console.log(error);
setLoading(false)
        }
      }

      getCoin();


    }, [])

  


  return (
    <>
    {


 loading? <Loader /> : 
 <>
    <div className="coin-detail" >
      <div className="coin-info">
      <div className="btn">
  <button onClick={()=>{setCurrency('inr')}}>inr</button>
  <button onClick={()=>{setCurrency('usd')}}>usd</button>
 </div>

        <div className="time">
        {coin.last_updated}
        </div>

        <div className="coin-image">
  <img height={"150px"} src={coin.image.large} alt="" />
        </div>

        <div className="coin-name">
        {coin.name}
        </div>

         <div className="coin-price">
         {currencySymbol}{coin.market_data.current_price[currency]}
         </div>

         <div className="coin-profit">
          {profit?<BiSolidChevronUpCircle className="up-arrow" />:<BiSolidChevronDownCircle 
          className="down-arrow"
          />}{coin.market_data.price_change_percentage_24h}%
         </div>

         <div className="market-rank">
         <TbWaveSine color='orange'/> # {coin.market_cap_rank}
         </div>

         <div className="coin-desc">
         <p>{coin.description['en'].split('.')[0]}.</p>
         </div>
      </div>

      <CoinChart currency={currency} />
    </div>

 </>





    }
    
    
    
    </>
  )
}

export default CoinDetail