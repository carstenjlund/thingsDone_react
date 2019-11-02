import React from 'react';
import AppTitle from '../../elements/AppTitle'
import './Header.css';

export function Header(props) {

    const TITLE = props.apptitle

    return (
        <header className="App-header">
            <AppTitle apptitle={TITLE} />
        </header>
    )
}