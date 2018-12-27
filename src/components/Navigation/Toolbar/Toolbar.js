import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Link } from 'react-router-dom';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.openHandler}/>
        <div className={classes.Logo}>
            <Link to="/" >
                <Logo/>
            </Link>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems unsuported={() => alert('This feature is not supported yet!')}/>
        </nav>
    </header>
);

export default toolbar;