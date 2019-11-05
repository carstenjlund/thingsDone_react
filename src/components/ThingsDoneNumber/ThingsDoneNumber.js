import React from 'react';
import { useSelector } from 'react-redux'
import './ThingsDoneNumber.css';

export default function ThingsDoneNumber() {
  const NoOfThings = useSelector(state => state.thingsDone.length)
  return (
    <section className="ThingsDoneNumber">
      <p className="ThingsDoneNumber__text">You did</p>
      <h2 className="ThingsDoneNumber__headline">{NoOfThings}</h2>
      <p className="ThingsDoneNumber__text">things today...</p>
    </section>
  )
}