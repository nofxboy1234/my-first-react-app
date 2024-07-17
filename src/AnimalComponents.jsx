function ListItem(props) {
  const animal = props.animal;
  return animal.startsWith('L') && <li>{animal}</li>;
  // return animal.startsWith('L') ? <li>{animal}</li> : null;
}

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <>
      <div>Owner: {props.person.name}</div>
      <ul style={props.theme}>
        {props.animals.map((animal) => {
          return <ListItem key={animal} animal={animal} />;
        })}
      </ul>
    </>
  );
}

function AnimalApp() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];
  // const animals = [];
  const anotherTheme = { color: 'pink' };

  return (
    <div>
      <h1>Animals: </h1>
      <List
        animals={animals}
        theme={{ color: 'fuchsia' }}
        person={{ name: 'Dylan', age: 39 }}
      />
    </div>
  );
}

export { ListItem, List, AnimalApp };
