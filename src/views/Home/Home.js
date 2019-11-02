import React from 'react';
import './Home.css';

export function Home() {

    return (
        <article className="MainArticle">
            <h2 className="MainArticle__Headline">Welcome to <br />the ThingsDone application</h2>
            <p className="MainArticle__text">The ThingsDone application is a demonstration of a react application, that is based on functional style components and hooks. Just for fun.</p>
        </article>
    )
}