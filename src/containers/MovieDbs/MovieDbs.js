import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Movies from './Movies/Movies';
import MovieDetail from '../../components/Movie/MovieDetail/MovieDetail';
import NewMovie from '../../components/Movie/NewMovie/NewMovie';

class MovieDbs extends Component{

    render(){

        return (
            <div>
                <Route path="/" exact component={Movies}/>
                <Route path="/now_playing" component={Movies}/>
                <Route path="/popular" render={() => <h1>Popular</h1>}/>
                <Route path="/top_rated" render={() => <h1>Top rated</h1>}/>
                <Route path="/add_movie" component={NewMovie}/>
                <Route path="/movie-detail/:id" component={MovieDetail}/>
            </div>
        );
    }
}

export default MovieDbs;