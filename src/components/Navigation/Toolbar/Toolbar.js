import React, { Component } from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { Link } from 'react-router-dom';



class Toolbar extends Component {

    notSupportedFeature = () => {
        alert('This feature is not supported!');
    };


    render(){

        return(
            <header className={classes.Toolbar}>
                <div className={classes.Logo}>
                    <Link to="/" >
                        <Logo/>
                    </Link>
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems unsuported={this.notSupportedFeature}/>
                </nav>
            </header>
        );
    }
}

export default Toolbar;