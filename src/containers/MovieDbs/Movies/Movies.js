import React, { Component }from 'react';
import axios from "axios";
import Movie from "../../../components/Movie/Movie";
import classes from './Movies.css';

class Movies extends Component {

    state = {
        movies: [
            {id: 1, title: 'Harry Potter a Kamen Mudrcu', overview: 'Popis k Harrymu'},
            {id: 2, title: 'Vykoupeni z veznice Shawshank', overview: 'Popis k vykoupeni'}
        ],
        api_key: null
    };

    componentDidMount(){
        if (this.state.api_key) {
            axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+this.state.api_key+'&language=en-US&page=1&region=us')
                .then(response => {
                    this.setState({
                        movies: response.data.results
                    });
                });
        }
    }


    render(){
        const movies = this.state.movies.map(movie => {
            return (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    id={movie.id}/>
            )
        });

        return (
            <section className={classes.Movies}>
                {movies}
            </section>
        );
    }

}

export default Movies;