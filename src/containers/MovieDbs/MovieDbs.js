import React, { Component } from 'react';
import Movies from '../../components/Movies/Movies';

class MovieDbs extends Component{

    state = {
        movies: [
            {id: 1, title: 'Harry Potter a kamen mudrcu', description: 'Popis k Harrymu'},
            {id: 2, title: 'Vykoupeni z veznice shawshank', description: 'Popis k vykoupeni'}
        ]
    };

    render(){

        return (
            <div>
                <Movies movies={this.state.movies}/>
            </div>
        );
    }
}

export default MovieDbs;