import React from 'react'
import './FormInput.css'

export function FormInput(props) {

    return (
        <input className="formfield" type={props.type} name={props.name} placeholder={props.placeholder} />
    )
}