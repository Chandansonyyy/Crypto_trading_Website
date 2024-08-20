import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-2275dyvyljo87kp4.us.auth0.com"
    clientId="bByHZj6wamMDIxzZ31DHMhoQYLOagXCw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  
    <Router>
      <App />
    </Router>
 
  </Auth0Provider>,
);
