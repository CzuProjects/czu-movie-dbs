import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Movies from './Movies/Movies';
import MovieDetail from '../../components/Movie/MovieDetail/MovieDetail';
import NewMovie from '../../components/Movie/NewMovie/NewMovie';
import Login from './Login/Login';

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(callback) {
        this.isAuthenticated = true;
        setTimeout(callback, 100); //fake async
    },
    logout(callback){
        this.isAuthenticated = false;
        setTimeout(callback, 100); //fake async
    }
};

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true ? <Component {...props}/> : <Redirect to="/login"/>
    )}/>
);

class MovieDbs extends Component{

    render(){

        return (
            <div>
                <Route path="/" exact component={Movies}/>
                <Route path="/now_playing" component={Movies}/>
                <Route path="/popular" render={() => <h1>Popular</h1>}/>
                <Route path="/top_rated" render={() => <h1>Top rated</h1>}/>
                <PrivateRoute path="/add_movie" component={NewMovie}/>
                <Route path="/movie-detail/:id" component={MovieDetail}/>
                <Route path="/login" component={Login}/>
            </div>
        );
    }
}

export default MovieDbs;