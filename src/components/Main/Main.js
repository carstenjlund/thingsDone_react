import React from 'react';
import { Route } from 'react-router-dom';
import './Main.css';

import Home from '../Home'
import ThingsDone from '../ThingsDone'
import About from '../About'

export function Main() {

    return (
        <main>

            <Route exact path="/" component={Home} />
            <Route path="/thingsDone" component={ThingsDone} />
            <Route path="/about" component={About} />

        </main>
    )
}