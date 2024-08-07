import { Link, useParams } from 'react-router-dom';

const SignUp = () => {
  const { name } = useParams();
  let registerPath = '/register';
  if (name) {
    registerPath = `/register?name=${name}`;
  }

  return (
    <>
      <div>
        {name && `${name[0].toUpperCase()}${name.slice(1)}, `}
        <Link to={registerPath}>Sign up</Link> now if you'd like your own
        Profile page!
      </div>
    </>
  );
};

export default SignUp;
