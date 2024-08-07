import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [registered, setRegistered] = useState(false);

  function register(e) {
    e.preventDefault();
    console.log('registered!');
    setRegistered(true);
  }

  return (
    <>
      {registered && <Navigate to="/" replace={true} />}
      <form onSubmit={register}>
        <input type="text" />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
