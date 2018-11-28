import React from 'react';
import Movie from './Movie/Movie';

const movies = (props) => {

    const movies = props.movies.map(movie => {
        return <Movie key={movie.id} title={movie.title} description={movie.description}/>
    });

    return (
        <div>
            {movies}
        </div>
    );
};

export default movies;