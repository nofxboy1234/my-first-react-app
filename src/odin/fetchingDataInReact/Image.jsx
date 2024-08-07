import { useEffect, useState } from 'react';

const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('fetch');
    fetch('https://jsonplaceholder.typicode.com/photos', {
      mode: 'cors',
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((data) => setImageURL(data[0].url))
      .catch((error) => setError(error));
  }, []);

  console.log('render');

  if (error) return <p>A network error was encountered</p>;

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img src={imageURL} alt={'placeholder text'} />
      </>
    )
  );
};

export default Image;
