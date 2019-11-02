import React from 'react';
import SubmitButton from '../../elements/SubmitButton'
import FormInput from '../../elements/FormInput'
import './AddThingForm.css'

export default function AddThingForm({ updateThings }) {
  const preventButRefresh = event => {
    event.preventDefault();
    let newThing = event.target.thing.value
    updateThings(newThing)
    event.target.reset();
  };

  const inputProps = {
    type: 'text',
    name: 'thing',
    placeholder: 'Add a thing...'
  }

  return (
    <form className="addThingForm" onSubmit={preventButRefresh} >
      <FormInput {...inputProps} />
      <SubmitButton />
    </form>
  )
}