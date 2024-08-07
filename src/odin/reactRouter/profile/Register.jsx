import { useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

const Register = () => {
  const [registered, setRegistered] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get('name') || '');

  function register(e) {
    e.preventDefault();
    console.log('registered!');
    setRegistered(true);
  }

  return (
    <>
      {registered && <Navigate to="/" replace={true} />}
      <form onSubmit={register}>
        <input type="text" value={name} name="name" onChange={setName} />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
