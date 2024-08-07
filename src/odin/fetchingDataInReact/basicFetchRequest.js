// const image = document.querySelector('img');
fetch('https://jsonplaceholder.typicode.com/photos', {
  mode: 'cors',
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].url);
    // image.src = data[0].url;
  })
  .catch((error) => console.error(error));
