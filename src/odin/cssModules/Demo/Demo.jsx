let styles = {};
import demo from './Demo.module.css';
import fancyButton from './css-fancy-button.module.css';
import { useState } from 'react';
import UserList from './UserList';

Object.assign(styles, fancyButton, demo);

const Demo = () => {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState('hello');

  console.log('render Demo');

  return (
    <>
      <div className={styles.demo}>Demo</div>
      <div className={styles.fancyButton}>Demo</div>

      <hr />

      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count)}>
        Set Count to the same value
      </button>

      <hr />

      <UserList greeting={greeting} />
    </>
  );
};

export default Demo;
