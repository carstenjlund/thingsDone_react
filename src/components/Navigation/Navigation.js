import React from 'react';
import { NavLink } from 'react-router-dom'

import './Navigation.css';

export function Navigation() {

    return (
        <nav className="App-navigation">
            <NavLink to="/" className="App-navigation__link">Home</NavLink>
            <NavLink to="/thingsdone" className="App-navigation__link">Things Done</NavLink>
            <NavLink to="/about" className="App-navigation__link">About</NavLink>
        </nav>
    )
}