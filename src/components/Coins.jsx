import React from 'react'
import { useState, useEffect } from 'react'
import { Baseurl } from './baseUrl'
import Loader from './Loader'
import axios from 'axios'
import Header from './Header'
import './Exchanges.css'
import { Link } from 'react-router-dom'
import "./Res.css"

const Coins = () => {

  const [loading, setLoading] = useState(true);

  const[coins, setCoins] = useState([]);

  const[currency, setCurrency]=useState('inr')

  const[search, setSearch] = useState('')
  const currencySymbol = currency==='inr'?'₹' : '$'
  useEffect(()=>{

    const getCoinsData = async()=>{
      const {data} = await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`);
      setCoins(data)
      console.log(data);
      setLoading(false)
    }
    getCoinsData();
  }, [currency])


  return (
    <>
    {
    loading?<Loader />: <>
    
    <Header />
    <div className="search-bar">
      <input type="text" placeholder='Search your coin'
      style={{height:"2rem", width:"20rem", position:'absolute',top:'2.5%',
       left:"33%", paddingLeft:"5px" }}
      
      onChange={(e)=>setSearch(e.target.value)}
      
      />
    </div>

 <div className="btns">
  <button onClick={()=>{setCurrency('inr')}}>inr</button>
  <button onClick={()=>{setCurrency('usd')}}>usd</button>
 </div>

<div>
{
          coins.filter((data)=>{
if(data==''){
  return data
}else if(data.name.toLowerCase().includes(search.toLocaleLowerCase())){
return data
}
          }).map((coindata, i)=>{
         return (

          <CoinCard coindata = {coindata}
          id = {coindata.id}
          
          i = {i} currencySymbol = {currencySymbol}/>
            )
  
          })
        }
</div>

        
   
    </>
    }
    </>
  )
}

const CoinCard=({coindata, i, currencySymbol,id})=>{

  const profit = coindata.price_change_percentage_24h>0


  return(
    <Link to ={`/coins/${id}`} style={{color :"white", textDecoration:'none'}}>
    
<div key={i}
            className="ex-cards">
            <div className="image">
              <img height = {"80px"}src={coindata.image} alt="" />
            </div>
            <div className="name">
                  {coindata.name}
            </div>
            <div className="price">
                {currencySymbol}  {coindata.
current_price}
            </div>
            <div style = {profit?{color:"green"} : {color:"red"} } 
            className="rank">
                  {
                  
                  profit ? "+" +
                  coindata.price_change_percentage_24h.toFixed(2) : "" +coindata.price_change_percentage_24h.toFixed(2)
                  }% 
            </div>
        </div>
    </Link>
  )
}


export default Coins