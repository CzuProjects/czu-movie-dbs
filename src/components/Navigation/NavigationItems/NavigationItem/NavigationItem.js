import React from 'react';
import classes from './NavigationItem.css';

import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={classes.NavigationItem} onClick={props.unsuported}>
        <NavLink activeClassName={classes.active} to={{pathname: props.link}}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;