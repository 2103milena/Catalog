import React from 'react';
import classes from './_search.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Search = () => (


    <div className={classes.Search}>
        {/* <label className={classes.Search__Label}>Search</label> */}

        <input className={classes.Search__input} type='text' />
        <FontAwesomeIcon
            icon={faSearch}
            size= 'lg'
            className={classes.Search__svg}
        />
    </div>

)

export default Search;