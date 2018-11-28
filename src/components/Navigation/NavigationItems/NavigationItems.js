import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Novinky</NavigationItem>
        <NavigationItem link='/'>Televize</NavigationItem>
        <NavigationItem link='/'>DVD & BlueRay</NavigationItem>
    </ul>
);

export default navigationItems;