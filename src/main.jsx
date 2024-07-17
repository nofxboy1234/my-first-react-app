import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Hello from './Greeting.jsx';
import { MacaroniCheese, FriedEggs } from './Food.jsx';
import MultiElement from './MultiElement.jsx';
import './index.css';
import TodoList from './TodoList.jsx';
import Bio from './Bio.jsx';
import Avatar from './Avatar.jsx';
import ScientistTodoList from './ScientistTodoList.jsx';
import DateTodoList from './DateTodoList.jsx';
import Challenge1 from './Challenge1.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello />
    <MacaroniCheese />
    <FriedEggs />
    <MultiElement />
    <TodoList />
    <Bio />
    <Avatar />
    <ScientistTodoList />
    <DateTodoList />
    <Challenge1 />
  </React.StrictMode>
);
