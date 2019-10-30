import React from 'react';
import './MyTest.css';

export default function MyTest({ NoOfThings }) {
  return (
    <section className="MyTest">
      <p className="MyTest__text">You did</p>
      <h2 className="MyTest__headline">{NoOfThings}</h2>
      <p className="MyTest__text">things today...</p>
    </section>
  )
}