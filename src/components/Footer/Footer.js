import React from 'react';
import './Footer.css';

export function Footer({ appname }) {

    return (
        <footer className="App-footer">
            <p>{appname} &bull; Functional style React &bull; 2019</p>
        </footer>
    )
}