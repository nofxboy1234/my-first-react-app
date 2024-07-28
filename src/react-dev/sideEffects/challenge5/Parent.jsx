import { useState, useEffect } from 'react';
import { fetchData } from './api';
import Page from './App';

export default function Parent() {
  const [removeComponent, setRemoveComponent] = useState(false);

  if (removeComponent) {
    return <div>unmounted</div>;
  }

  return (
    <>
      <button onClick={() => setRemoveComponent(true)}>Unmount</button>
      <Page />
    </>
  );
}
