import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Hello from './Greeting.jsx';
import MacaroniCheese from './Food.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello />
    <MacaroniCheese />
  </React.StrictMode>
);
