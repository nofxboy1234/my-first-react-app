import { useState } from 'react';
import { useEffect } from 'react';

const UserList = ({ count }) => {
  const [users, setUsers] = useState(['user1']);

  useEffect(() => {
    console.log('UserList effect');

    return () => console.log('UserList cleanup');
  }, [count]);

  console.log('render UserList');

  return (
    <>
      <button onClick={() => setUsers([...users, 'user'])}>Add user</button>
      <button onClick={() => setUsers(users)}>Set Users to same value</button>

      {users.map((user, index) => (
        <div key={index}>{user}</div>
      ))}
    </>
  );
};

export default UserList;
