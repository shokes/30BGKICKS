import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './userContext';

// dev-uwvtg5zp.us.auth0.com
// ShAKEg52430xF2RfP0ptgIqa8aBZWg3Q

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-uwvtg5zp.us.auth0.com'
      clientId='ShAKEg52430xF2RfP0ptgIqa8aBZWg3Q'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <UserProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
