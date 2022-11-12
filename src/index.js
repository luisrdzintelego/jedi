import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//aws configuración
import { Amplify } from 'aws-amplify';

import config from './aws-exports';
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  //Es intencional. El StrictMode de React renderiza dos veces los componentes para ayudarte a detectar efectos secundarios de la renderización. Esto solo ocurre durante el desarrollo.
  //por eso se ven los console log 2 veces
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <App />


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
