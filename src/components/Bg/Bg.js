import React, { Component } from 'react'
import classes from './_bg.module.scss';
import ParticlesBg from 'particles-bg'


class Bg extends Component {
  render() {
    return (
      <div className={classes.Bg}>
        <ParticlesBg
          // height={window.outerHeight}
          
          type="circle"
          bg={true}
        />
      </div>
    )
  }
}

export default Bg;