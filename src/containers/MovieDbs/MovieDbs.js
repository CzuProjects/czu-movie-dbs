import React, { Component } from 'react';
import Movie from '../../components/Movie/Movie';
import axios from 'axios';

class MovieDbs extends Component{

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=53b73b543391b386b5953d41b80129f0&language=en-US&page=1&region=us')
            .then(response => {
                this.setState({
                    movies: response.data.results
                });
                console.log(this.state.movies);
            });
    }

    state = {
        movies: [
            {id: 1, title: 'Harry Potter a kamen mudrcu', overview: 'Popis k Harrymu'},
            {id: 2, title: 'Vykoupeni z veznice shawshank', overview: 'Popis k vykoupeni'}
        ]
    };

    render(){

        const movies = this.state.movies.map(movie => {
            return <Movie key={movie.id} title={movie.title} overview={movie.overview}/>
        });

        return (
            <div>
                {movies}
            </div>
        );
    }
}

export default MovieDbs;