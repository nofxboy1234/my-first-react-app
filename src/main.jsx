import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Hello from './Greeting.jsx';
import { MacaroniCheese, FriedEggs } from './Food.jsx';
import MultiElement from './MultiElement.jsx';
import './index.css';
import TodoList from './TodoList.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello />
    <MacaroniCheese />
    <FriedEggs />
    <MultiElement />
    <TodoList />
  </React.StrictMode>
);
