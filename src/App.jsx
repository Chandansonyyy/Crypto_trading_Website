import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import CoinDetail from './components/CoinDetail';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Exchanges />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coins/:id" element={<CoinDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      
    </>
  );
}

export default App;
