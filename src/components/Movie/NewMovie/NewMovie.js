import React, { Component }from 'react';
import classes from './NewMovie.css';
import axios from 'axios';
import { API } from '../../../containers/MovieDbs/MovieDbs';


class NewMovie extends Component {

    state = {
        title: 'Type in the movie title',
        description: 'Type in some movie description',
        api_key: API.key
    };

    postDataToServer = () => {
        const data = {
            ...this.state
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                console.log(response.status);
                if (response.status === 201){
                    alert('Move has been successfully added.')
                }
            });
    };

    updateApiKeyHandler = (event) => {
        this.setState({api_key: event.target.value});
        API.key = event.target.value;
    };

    render() {

        return (
            <div>
                <div className={classes.NewMovie}>
                    <h1>Add new movie section</h1>
                    <div className={classes.row}>
                        <label className={classes["col-25"]}>Title</label>
                        <div className={classes["col-75"]}>
                            <input type="text" value={this.state.title} onChange={event => this.setState({title: event.target.value})}/>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <label className={classes["col-25"]}>Description</label>
                        <div className={classes["col-75"]}>
                            <textarea rows="4" value={this.state.description} onChange={event => this.setState({description: event.target.value})} />
                        </div>
                    </div>
                    <div className={classes.row}>
                        <button onClick={this.postDataToServer}>Add movie</button>
                    </div>
                </div>
                <div>
                    <input type="text" value={this.state.api_key} placeholder="enter API key if you want load data" onChange={this.updateApiKeyHandler}/>
                </div>
            </div>
        );
    }
}

export default NewMovie;
