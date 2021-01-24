import React, { Component } from 'react';
import classes from './_navlist.module.scss';


class NavList extends Component {



    state = {
        navDetails: [
            { name: 'Favourites', clicked: this.props.handle1 },
            { name: 'Must watch', clicked: this.props.handle2 },
            { name: 'Movies', clicked: this.props.handle3 },
            { name: 'Series', clicked: this.props.handle4 },
            { name: 'Games', clicked: this.props.handle5 },
            { name: 'Not Inserted', clicked: this.props.handle6 },
        ]
    }

    render() {
        return (
            <div className={classes.List}>
                {this.state.navDetails.map(navDetail => {
                    return (
                        <div 
                        key={navDetail.name} 
                        className={classes.ListElement}
                        onClick={navDetail.clicked}
                        >
                            {navDetail.name}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default NavList;

