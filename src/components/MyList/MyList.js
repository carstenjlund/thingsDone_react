import React from 'react';

export default function MyList({ thingsDone }) {
  const thingsList = thingsDone.map((current) => {
    return (<li key={current.id}>{current.thing}</li>)
  });
  return (
    <ul>
      {thingsList}
    </ul>
  )
}