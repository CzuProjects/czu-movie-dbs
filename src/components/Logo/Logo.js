import React from 'react';
import burgerLogo from '../../assets/images/dummy-logo.png';
import classes from './Logo.css';


const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='Dummy logo'/>
    </div>
);

export default logo;