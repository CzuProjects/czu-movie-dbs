import React, { Component } from 'react';
import classes from './Login.css';
import { fakeAuth } from '../MovieDbs';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        username: '',
        password:'',
        error: '',
        redirectToReferrer: false
    };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({redirectToReferrer: true})
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        return this.setState({ error: '' });
    };

    dismissError = () => {
        this.setState({error: ''});
    };

    render() {

        const { redirectToReferrer } = this.state;
        if (redirectToReferrer === true){
            return <Redirect to="/"/>
        }

        return (
            <div className={classes.Login}>
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    <input type="text" placeholder="Username" data-test="username" value={this.state.username} onChange={event => this.setState({username: event.target.value})} />
                    <input type="password" placeholder="password" data-test="password" value={this.state.password} onChange={event => this.setState({password: event.target.value})} />
                    <input type="submit" value="Log In" data-test="submit" onClick={this.login}/>
                </form>
            </div>
        );
    }
}

export default Login;