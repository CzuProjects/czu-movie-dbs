import React from 'react';
import classes from './SearchItem.css';

const searchItem = () => (
    <input
        className={classes.SearchItem}
        onClick={() => alert('This functionality is not supported yet.')}
        type="search" onSubmit={() => alert('This functionality is not supported yet.')}
        placeholder="Input string"/>
);

export default searchItem;