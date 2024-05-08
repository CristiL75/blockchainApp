import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TransactionProvider } from './context/TransactionContext';
import { Tutorials } from './components/Tutorials'; // Importați componenta Tutorials
import { Exchange } from './components/Exchange';
import { Market } from './components/Market';
import { Wallets } from './components/Wallets';

ReactDOM.render(
  <React.StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
    <Tutorials /> {/* Adăugați componenta Tutorials aici */}
    <Exchange />
    <Market />
    <Wallets />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
