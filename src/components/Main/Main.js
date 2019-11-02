import React from 'react';
import { Route } from 'react-router-dom';
import './Main.css';

import Home from '../../views/Home'
import ThingsDone from '../../views/ThingsDone'
import About from '../../views/About'

export function Main() {

    return (
        <main>

            <Route exact path="/" component={Home} />
            <Route path="/thingsDone" component={ThingsDone} />
            <Route path="/about" component={About} />

        </main>
    )
}