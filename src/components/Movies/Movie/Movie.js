import React from 'react';

const movie = (props) => (
    <article>
        <h1>{props.title}</h1>
        <div>{props.description}</div>
    </article>
);

export default movie;