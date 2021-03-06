import React, { Component }from 'react';
import classes from './NewMovie.css';
import axios from '../../../axios';
import { API } from '../../../containers/MovieDbs/MovieDbs';


class NewMovie extends Component {

    state = {
        title: 'Type in the movie title',
        description: 'Type in some movie description',
        api_key: API.key
    };

    postDataToServer = (event) => {
        event.preventDefault();

        const data = {
            ...this.state
        };
        axios.post('/newMovie.json', data)
            .then(response => {
                console.log(response.status);
                if (response.status === 201){
                    alert('Move has been successfully added.')
                }
            });
    };

    render() {

        return (
                <div className={classes.NewMovie}>
                    <form onSubmit={this.postDataToServer}>
                        <div className={classes.row}>
                            <div className={classes.col25}>
                                <label>Title</label>
                            </div>
                            <div className={classes.col75}>
                                <input
                                    type="text"
                                    value={this.state.title}
                                    onChange={event => this.setState({title: event.target.value})}/>
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.col25}>
                                <label>Description</label>
                            </div>
                            <div className={classes.col75}>
                                <textarea
                                    value={this.state.description}
                                    onChange={event => this.setState({description: event.target.value})}/>
                            </div>
                        </div>
                        <div className={classes.row}>
                            <input type="submit" value="Add movie" />
                        </div>
                    </form>
                    <div>
                        <label>API key is set to: {this.state.api_key}</label>
                    </div>
                </div>
        );
    }
}

export default NewMovie;
