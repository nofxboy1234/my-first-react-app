const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 'b',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

function getImageUrl() {
  return baseUrl + person.imageId + person.imageSize + '.jpg';
}

export default function Challenge3() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos;s Todos</h1>
      <img className="avatar" src={getImageUrl()} alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
