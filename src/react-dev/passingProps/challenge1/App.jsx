import { getImageUrl } from './utils.js';
import { v7 as uuid } from 'uuid';

function Profile({
  name,
  imageID,
  profession,
  awards,
  discovery,
  imageSize = 70,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageID)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  const scientists = [
    {
      id: uuid(),
      name: 'Maria Skłodowska-Curie',
      imageID: 'szV5sdG',
      profession: 'physicist and chemist',
      awards: [
        'Nobel Prize in Physics',
        'Nobel Prize in Chemistry',
        'Davy Medal',
        'Matteucci Medal',
      ],
      discovery: 'polonium (chemical element)',
    },
    {
      id: uuid(),
      name: 'Katsuko Saruhashi',
      imageID: 'YfeOqp2',
      profession: 'geochemist',
      awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
      discovery: 'a method for measuring carbon dioxide in seawater',
    },
  ];

  return (
    <div>
      <h1>Notable Scientists</h1>

      {scientists.map((scientist) => (
        <Profile key={scientist.id} {...scientist} />
      ))}
    </div>
  );
}
