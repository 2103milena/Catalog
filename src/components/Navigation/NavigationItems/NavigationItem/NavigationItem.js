import React from 'react';
import classes from './_navigationItem.module.scss';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => (

    <li >
        {/* <Link to={props.link} onClick={props.clicked}
            className={props.active ? classes.active : null}
        >{props.children}</Link> */}

        <Link className={classes.Link} to={props.link}
            onClick={props.clicked}
            
        >
            {props.children}
        </Link>
    </li>
)

export default NavigationItem;