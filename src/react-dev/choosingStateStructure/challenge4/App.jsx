import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    let updatedSelectedIds;

    if (selectedIds.includes(toggledId)) {
      updatedSelectedIds = selectedIds.filter((id) => id != toggledId);
    } else {
      updatedSelectedIds = [...selectedIds, toggledId];
    }

    setSelectedIds(updatedSelectedIds);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
