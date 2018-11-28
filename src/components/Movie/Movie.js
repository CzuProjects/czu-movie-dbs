import React from 'react';
import classes from './Movie.css';

const movie = (props) => (
    <article className={classes.Movie}>
        <h1>{props.title}</h1>
        <div>{props.overview}</div>
    </article>
);

export default movie;