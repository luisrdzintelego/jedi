import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';
//aws configuración

import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

//import { Amplify } from 'aws-amplify';

/* Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://34hjs5sszjfvtded3bu3bbn3pe.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-nzfqq2gpfrbzfczrcwpqksib7a'
    }
  }
}); */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  //Es intencional. El StrictMode de React renderiza dos veces los componentes para ayudarte a detectar efectos secundarios de la renderización. Esto solo ocurre durante el desarrollo.
  //por eso se ven los console log 2 veces
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
<CookiesProvider>
  <App />
  </CookiesProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
