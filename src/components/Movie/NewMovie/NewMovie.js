import React, { Component }from 'react';
import classes from './NewMovie.css';
import axios from 'axios';


class NewMovie extends Component {

    state = {
        title: 'Type in the movie title',
        description: 'Type in some movie description'
    };

    postDataToServer = () => {
        const data = {
            ...this.state
        };
        console.log('???');
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
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
        );
    }
}

export default NewMovie;
