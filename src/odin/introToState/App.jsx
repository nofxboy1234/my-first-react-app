import React, { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changedTimes, setChangedTimes] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);

    if (color !== backgroundColor) {
      setChangedTimes(changedTimes + 1);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
      <div>Number of times changed: {changedTimes}</div>
    </div>
  );
}

export default App;
