import React from 'react';
import { useDispatch } from 'react-redux'
import uuidv4 from 'uuid/v4'

import SubmitButton from '../../elements/SubmitButton'
import FormInput from '../../elements/FormInput'
import './AddThingForm.css'

export default function AddThingForm() {
  const dispatch = useDispatch()

  const preventButRefresh = event => {
    event.preventDefault();
    let newThing = event.target.thing.value
    dispatch({
      type: 'ADD_THING',
      payload: {
        id: uuidv4(),
        thing: newThing
      }
    })
    event.target.reset();
  };

  const inputProps = {
    type: 'text',
    name: 'thing',
    placeholder: 'A thing I did...'
  }

  return (
    <form className="addThingForm" onSubmit={preventButRefresh} >
      <FormInput {...inputProps} />
      <SubmitButton />
    </form>
  )
}