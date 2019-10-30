import React from 'react';
import './About.css';

export function About() {

    return (
        <article className="AboutArticle">
            <h2 className="AboutArticle__Headline">About the ThingsDone application</h2>
            <p className="AboutArticle__text">The ThingsDone application is a demonstration of a react application, that is based on functional style components and hooks.</p>
            <p className="AboutArticle__text">This application is inspired by an online tutorial about web components. I forget which one it is, but when I remember I will post a link here. I decided to redo it in React to see the differences.</p>
            <p className="AboutArticle__text">I later extended the project a little bit, adding the React Router wiht sub-pages, and fetching of data, and populating components with the useEffects-hook </p>
        </article>
    )
}