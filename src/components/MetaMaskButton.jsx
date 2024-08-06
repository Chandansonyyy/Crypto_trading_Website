import React from 'react';

const MetaMaskButton = () => {
  const connectMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('MetaMask is connected');
      } catch (error) {
        console.error('User rejected the request', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to buy any coin.');
    }
  };

  return (
    <button onClick={connectMetaMask} className="metamask-button">
      Connect MetaMask
    </button>
  );
};

export default MetaMaskButton;
