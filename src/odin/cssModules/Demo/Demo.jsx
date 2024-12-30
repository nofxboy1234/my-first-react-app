let styles = {};
import demo from './Demo.module.css';
import fancyButton from './css-fancy-button.module.css';
import { useState } from 'react';

Object.assign(styles, fancyButton, demo);

const Demo = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(['user1']);

  return (
    <>
      <div className={styles.demo}>Demo</div>
      <div className={styles.fancyButton}>Demo</div>

      <br />

      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count)}>
        Set Count to the same value
      </button>

      <br />

      <button onClick={() => setUsers([...users, 'user'])}>Add user</button>
      <button onClick={() => setUsers(users)}>Set Users to same value</button>
      {users.map((user, index) => (
        <div key={index}>{user}</div>
      ))}
    </>
  );
};

export default Demo;
