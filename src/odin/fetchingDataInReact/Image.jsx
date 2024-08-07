import { useEffect, useState } from 'react';

const Image = () => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    console.log('fetch');
    fetch('https://jsonplaceholder.typicode.com/photos', {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => setImageURL(data[0].url))
      .catch((error) => console.error(error));
  }, []);

  console.log('render');

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
