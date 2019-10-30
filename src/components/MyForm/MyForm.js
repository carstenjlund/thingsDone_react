import React from 'react';

export default function MyForm({ updateThings }) {
  const preventButRefresh = event => {
    event.preventDefault();
    updateThings(event.target.thing.value)
    event.target.reset();
  };

  return (
    <form onSubmit={preventButRefresh} >
      <input type="text" name="thing" placeholder="Add a thing ..." />
      <button type="submit">submit</button>
    </form>
  )
}