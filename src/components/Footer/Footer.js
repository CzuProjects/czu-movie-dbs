import React from 'react';
import classes from './Footer.css';

const footer = () => (
    <div className={classes.Footer}>
        <div>Copyright &copy 2018 - 2019 pro CZU PEF in Prague</div>
        <div>Participants:
            <strong> Patrik Mlacki </strong>|
            <strong> Michal Siron </strong>|
            <strong> Dominik Spiral </strong>|
            <strong> Michal Snajdr </strong>|
            <strong> Katerina Mackovikova</strong>
        </div>
    </div>
);

export default footer;