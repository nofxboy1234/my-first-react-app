import { people } from './data.js';
import { getImageUrl } from './utils.js';

function PersonListItem({ person }) {
  return (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
}

export default function List() {
  const chemists = people
    .filter((person) => person.profession === 'chemist')
    .map((person) => <PersonListItem key={person.id} person={person} />);

  const everyoneElse = people
    .filter((person) => person.profession !== 'chemist')
    .map((person) => <PersonListItem key={person.id} person={person} />);

  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemists}</ul>
      <h1>Everyone Else</h1>
      <ul>{everyoneElse}</ul>
    </article>
  );
}
