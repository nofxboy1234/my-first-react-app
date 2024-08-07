const Register = () => {
  function register(e) {
    e.preventDefault();
    console.log('registered!');
  }

  return (
    <>
      <form onSubmit={register}>
        <input type="text" />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
