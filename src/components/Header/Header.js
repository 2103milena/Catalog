// import ParticlesBg from 'particles-bg';
import React, { Component } from 'react';
import classes from './_header.module.scss';

class Header extends Component {


    render() {
        return (
            <div className={classes.Header}>
                <div className={classes.Header__div}>
                    Welcome to my catalog !
                    <div style={{ color: 'rgb(104, 216, 188)' }}>
                        &#10084; {this.props.result}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;