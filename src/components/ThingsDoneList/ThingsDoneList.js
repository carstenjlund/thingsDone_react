import React from 'react'

export default function ThingsDoneList({ thingsDone }) {
  return (
    <ul>
      {thingsDone.map(current => (
        <li key={current.id}>{current.thing}</li>
      ))}
    </ul>
  )
}