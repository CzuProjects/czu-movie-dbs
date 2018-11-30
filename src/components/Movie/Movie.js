import React from 'react';
import classes from './Movie.css';
import { Link } from 'react-router-dom';

const movie = (props) => (

    <article className={classes.Movie}>
        <h1>{props.title}</h1>
        <div>{props.overview}</div>
        <Link to={"/movie-detail/"+props.id}>Details</Link>
    </article>
);

export default movie;