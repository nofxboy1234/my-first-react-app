import { useState, useEffect } from 'react';
import { fetchData } from './api';

export default function Page() {
  const [planetList, setPlanetList] = useState([]);
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  console.log('Render***********************');
  console.log(`planetList: ${planetList}`);
  console.log(`planetId: ${planetId}`);
  console.log(`placeList: ${placeList}`);
  console.log(`placeId: ${placeId}`);
  console.log('Render***********************');

  useEffect(() => {
    console.log('Executing planets effect');
    let ignore = false;
    fetchData('/planets').then((result) => {
      console.log(`planets ignore: ${ignore}`);
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // Select the first planet
      } else {
        console.log('Ignore: Not fetching a list of planets');
      }
    });
    return () => {
      console.log('cleaning up planets fetch');
      ignore = true;
    };
  }, []);

  useEffect(() => {
    console.log('Executing places effect');
    if (planetId === '') {
      console.log('On mount, nothing is selected in the first box yet');
      return;
    }

    let ignore = false;
    fetchData(`/planets/${planetId}/places`).then((result) => {
      console.log(`places ignore: ${ignore}`);
      if (!ignore) {
        console.log(`Fetched a list of places on "${planetId}".`);
        setPlaceList(result);
        setPlaceId(result[0].id); // Select the first place
      } else {
        console.log('Ignore: Not fetching a list of places');
      }
    });
    return () => {
      console.log('cleaning up places fetch');
      ignore = true;
    };
  }, [planetId]);

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select
          value={planetId}
          onChange={(e) => {
            setPlanetId(e.target.value);
          }}
        >
          {planetList.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select
          value={placeId}
          onChange={(e) => {
            setPlaceId(e.target.value);
          }}
        >
          {placeList.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <p>
        You are going to: {placeId || '???'} on {planetId || '???'}{' '}
      </p>
    </>
  );
}
