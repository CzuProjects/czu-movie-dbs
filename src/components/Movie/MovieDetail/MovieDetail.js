import React, { Component } from 'react';
import axios from 'axios';
import classes from './MovieDetail.css';

class MovieDetail extends Component {

    state = {
        detail: null
    };

    componentDidMount(){
        if (this.props.match.params.id){
            if ( !this.state.detail || (this.state.detail && this.props.match.params.id !== this.state.detail.id)){
                axios.get('https://api.themoviedb.org/3/movie/'+this.props.match.params.id+'?api_key=53b73b543391b386b5953d41b80129f0&language=en-US')
                    .then(response => {
                        this.setState({
                            detail: response.data
                        });
                        console.log(response.data);
                    });
            }
        }
    }

    render(){
        let movieDetail = <p>Loading...</p>;

        if (this.state.detail){
            movieDetail = (
                <div className={classes.MovieDetail}>
                    <h1>{this.state.detail.original_title}</h1>
                    <p><b>Popularity: {this.state.detail.popularity}</b></p>
                    <p>{this.state.detail.overview}</p>
                    <div>
                        <img
                            src={"https://image.tmdb.org/t/p/w500/"+this.state.detail.backdrop_path}
                            alt={this.state.detail.original_title} />
                    </div>
                </div>
            );
        }

        return movieDetail;
    }

}

export default MovieDetail;