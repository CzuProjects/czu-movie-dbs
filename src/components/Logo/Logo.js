import React from 'react';
import burgerLogo from '../../assets/images/czu-movie-dbs.png';
import classes from './Logo.css';


const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='Dummy logo'/>
    </div>
);

export default logo;