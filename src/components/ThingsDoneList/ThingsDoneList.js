import React from 'react'
import { useSelector } from 'react-redux'

export default function ThingsDoneList() {
  const thingsDone = useSelector(state => state.thingsDone)

  return (
    <ul>
      {thingsDone.map(current => (
        <li key={current.id}>{current.thing}</li>
      ))}
    </ul>
  )
}