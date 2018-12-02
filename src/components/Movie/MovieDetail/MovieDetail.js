import React, { Component } from 'react';
import axios from 'axios';
import classes from './MovieDetail.css';

class MovieDetail extends Component {

    state = {
        detail: null,
        mocked_data: [
            {
                id: 1,
                original_title: 'Harry Potter',
                overview: 'Obecny text o Harrym',
                popularity: 99,
                backdrop_path: '/wfnMt6LGqYHcNyOfsuusw5lX3bL.jpg'
            },
            {
                id: 2,
                original_title: 'Vykoupeni z veznice Shawshank',
                overview: 'Obecny text o Shawshank',
                popularity: 99,
                backdrop_path: '/j9XKiZrVeViAixVRzCta7h1VU9W.jpg'
            }
        ],
        api_key: null
    };

    componentDidMount(){
        if (this.props.match.params.id && this.state.api_key){
            if ( !this.state.detail || (this.state.detail && this.props.match.params.id !== this.state.detail.id)){
                axios.get('https://api.themoviedb.org/3/movie/'+this.props.match.params.id+'?api_key='+this.state.api_key+'&language=en-US')
                    .then(response => {
                        this.setState({
                            detail: response.data
                        });
                    });
            }
        }else{
            const mocked_details = [...this.state.mocked_data];
            let mocked_detail = null;
            for (let detail in mocked_details){
                if (mocked_details[detail].id === parseInt(this.props.match.params.id)){
                    mocked_detail = mocked_details[detail];
                }
            }
            this.setState({
                detail: mocked_detail
            });
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