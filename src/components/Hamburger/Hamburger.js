import React, { Component } from "react";
import classes from './_hamburger.module.scss';

class Hamburger extends Component {

  state = {
    isVisible: true
  }

  toggleHandler = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }))
    console.log(this.state.isVisible)
  }

  render() {

    return (
      <div>

        <div className={this.state.isVisible ? classes.MenuInvisible : classes.MenuVisible}>
          <ul className={this.state.isVisible ? classes.MenuInvisible__list : classes.MenuVisible__list}>
            <li href="/">Favourites</li>
            <li>Must watch</li>
            <li>Component API</li>
            <li>Movies</li>
            <li>Series</li>
            <li>Games</li>
            <li>Not Inserted</li>
          </ul>
        </div>
        <div
          className={classes.Hamburger}
          onClick={this.toggleHandler}
        >
          <div className={this.state.isVisible ? classes.Bar1 : classes.Bar1Clicked} />
          <div className={this.state.isVisible ? classes.Bar2 : classes.Invisible} />
          <div className={this.state.isVisible ? classes.Bar3 : classes.Bar3Clicked} />
        </div>
      </div>
    )
  }

}

export default Hamburger;