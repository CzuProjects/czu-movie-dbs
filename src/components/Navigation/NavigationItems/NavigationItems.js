import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { fakeAuth } from '../../../containers/MovieDbs/MovieDbs';

const navigationItems = (props) => {

    let items = (
        <>
            <NavigationItem link='/now_playing' >Now playing</NavigationItem>
            <NavigationItem unsuported={props.unsuported} link='/popular' >Popular</NavigationItem>
            <NavigationItem unsuported={props.unsuported} link='/top_rated' >Top rated</NavigationItem>
        </>
    );
    if (!fakeAuth.isAuthenticated) {
        items =
            <>
                {items}
                <NavigationItem link='/login' >Login</NavigationItem>
            </>
    }else {
        items =
            <>
                {items}
                <NavigationItem link='/add_movie' >Add movie</NavigationItem>
                <NavigationItem link='/logout' >Logout</NavigationItem>
            </>
    }

    return (
        <ul className={classes.NavigationItems}>
            {items}
        </ul>
    );
};

export default navigationItems;