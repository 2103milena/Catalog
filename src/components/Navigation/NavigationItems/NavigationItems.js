import React from 'react';
import Search from '../../Search/Search';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './_navigationItems.module.scss';


const NavigationItems = (props) => (
    <div className={classes.DivNav}>
        <ul className={classes.DivNav__UlNav}>
            <NavigationItem link="/1" clicked={props.clicked}>Last added</NavigationItem>
            <NavigationItem link="/2" clicked={props.clicked}>Synchronize</NavigationItem>
            <NavigationItem link="/3" clicked={props.clicked}>Advanced Search</NavigationItem>
        </ul>
        <Search />
    </div>
)

export default NavigationItems;