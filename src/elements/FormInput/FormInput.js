import React from 'react'
import './FormInput.css'

export function FormInput({ type, name, placeholder }) {

    return (
        <input
            className="formfield"
            type={type}
            name={name}
            placeholder={placeholder}
        />
    )
}