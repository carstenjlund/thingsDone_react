import React from 'react';
import './ThingsDoneNumber.css';

export default function ThingsDoneNumber({ NoOfThings }) {
  return (
    <section className="ThingsDoneNumber">
      <p className="ThingsDoneNumber__text">You did</p>
      <h2 className="ThingsDoneNumber__headline">{NoOfThings}</h2>
      <p className="ThingsDoneNumber__text">things today...</p>
    </section>
  )
}