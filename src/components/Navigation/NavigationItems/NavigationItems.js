import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/now_playing' >Now playing</NavigationItem>
            <NavigationItem unsuported={props.unsuported} link='/popular' >Popular</NavigationItem>
            <NavigationItem unsuported={props.unsuported} link='/top_rated' >Top rated</NavigationItem>
            <NavigationItem link='/add_movie' >Add movie</NavigationItem>
        </ul>
    )
};

export default navigationItems;