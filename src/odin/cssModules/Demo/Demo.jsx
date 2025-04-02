let styles = {};
import demo from './Demo.module.css';
import fancyButton from './css-fancy-button.module.css';
import { useState } from 'react';
import UserList from './UserList';

Object.assign(styles, fancyButton, demo);

const Demo = () => {
  const [count, setCount] = useState(0);

  console.log('render Demo');

  return (
    <>
      <div className={styles.demo}>Demo</div>
      <div className={styles.fancyButton}>Demo</div>

      <hr />

      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button
        onClick={() => {
          console.log('Set count to', count);
          setCount(count);
        }}
      >
        Set Count to the same value
      </button>

      <hr />

      <UserList count={count} />
      {/* {count % 3 === 0 ? <UserList count={count} /> : undefined} */}
    </>
  );
};

export default Demo;
