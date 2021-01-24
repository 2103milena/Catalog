import React, { Component } from 'react';
import classes from './_card.module.scss';
import axios from 'axios';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Card extends Component {

    // state = {
    //     movies: [],
    //     error: false
    // }

    // componentDidMount() {
    //     axios.get('http://justforkicks.duckdns.org:8080/api/listResults?type=movie&page=0&perPage=10&genre=null&year=null')
    //         .then(response => {
    //             const movies = response.data;

    //             this.setState({ movies: movies })
    //             // console.log(movies)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    render() {
        return (
            <div className={classes.Card}>
                <div
                    className={classes.Card__title}
                >
                    {this.props.name}
                </div>
                <div
                    className={classes.Card__section}
                >
                    <img
                        className={classes.Card__img}
                        src={this.props.picture}
                    />
                    <div
                        className={classes.Card__section2}
                    >
                        <div>
                            <div><b>Quality: </b>{this.props.quality}</div>
                            <div><b>Genre: </b>{this.props.genre}</div>
                        </div>
                        <div
                            className={classes.Card__buttons}
                        >
                            <button className={classes.Card__button}>info</button>
                            <button className={classes.Card__button}>open</button>

                            <button className={classes.Card__button}>
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    size='lg'
                                />
                            </button>

                            <button className={classes.Card__button}>edit</button>
                            <button className={classes.Card__button}>options</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card;