import { useEffect, useState } from 'react';

export default function CountSecrets() {
  const [secret, setSecret] = useState({ value: '', countSecrets: 0 });

  useEffect(() => {
    if (secret.value === 'secret') {
      setSecret((s) => ({ ...s, countSecrets: s.countSecrets + 1 }));
    }
  }, [secret]);

  const onChange = ({ target }) => {
    setSecret((s) => ({ ...s, value: target.value }));
  };

  return (
    <div>
      <input type="text" value={secret.value} onChange={onChange} />
      <div>Number of secrets: {secret.countSecrets}</div>
    </div>
  );
}
