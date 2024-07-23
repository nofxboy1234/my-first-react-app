import { useState } from 'react';

export default function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(100);

  const fullName = firstName + ' ' + lastName;

  const handleIncreaseAge = () => {
    console.log('in handleIncreaseAge (before setAge call): ', age);
    setAge(age + 1);
    // we've called setPerson, surely person has updated?
    console.log('in handleIncreaseAge (after setAge call): ', age);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log('during render: ', age);

  return (
    <>
      <div>
        <label htmlFor="first-name">First Name </label>
        <input
          type="text"
          id="first-name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="last-name">Last Name </label>
        <input
          type="text"
          id="last-name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <h1>{fullName}</h1>
      <h2>{age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
