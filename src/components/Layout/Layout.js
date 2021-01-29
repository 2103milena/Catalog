import React, { useState, useEffect } from 'react';
import { useDencrypt } from "use-dencrypt-effect";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import { BrowserRouter } from 'react-router-dom';
import NavList from '../Buttons/NavList';
import Header from '../Header/Header';
import Bg from '../Bg/Bg';
import Hamburger from '../Hamburger/Hamburger';
import Card from '../Card/Card';
import Selection from '../Selection/Selection';
import classes from './_layout.module.scss';
import axios from 'axios';


const Layout = (props) => {

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [counterMovies, setCounterMovies] = useState(0);
    const [counterSeries, setCounterSeries] = useState(0);
    const [enablePageOfMovies, setEnablePageOfMovies] = useState(false);
    const [enablePageOfSeries, setEnablePageOfSeries] = useState(false);
    // const [enabledBackButton, setEnabledBackButton] = useState(true);

    const [movieCardShow, setMovieCardShow] = useState(false);
    const [serieCardShow, setSerieCardShow] = useState(false);


    //animation of titles

    const values = ["Favourites", "Must Watch", "Movies", "Series", "Games", "Not Inserted"];
    const { result, dencrypt } = useDencrypt();
    const titleHandler1 = () => { return dencrypt(values[0]); }
    const titleHandler2 = () => { return dencrypt(values[1]); }
    const titleHandler3 = () => { return dencrypt(values[2]); }
    const titleHandler4 = () => { return dencrypt(values[3]); }
    const titleHandler5 = () => { return dencrypt(values[4]); }
    const titleHandler6 = () => { return dencrypt(values[5]); }

    useEffect(() => {
        getAllMovies();
        getAllSeries();
        goForwards();
        goBackwards();
    }, [])

    const getAllMovies = async () => {
        let response = await axios.get(`http://justforkicks.duckdns.org:8080/api/listResults?type=movie&page=${counterMovies}&perPage=10&genre=null&year=null`);
        setMovies(response.data)
    }
    const getAllSeries = async () => {
        let response = await axios.get(`http://justforkicks.duckdns.org:8080/api/listResults?type=series&page=${counterSeries}&perPage=50&genre=null&year=null`);
        setSeries(response.data)
    }
    const handleClickMovies = () => {
        titleHandler3();
        setMovieCardShow(true);
        setSerieCardShow(false);
        setEnablePageOfMovies(true);
        setEnablePageOfSeries(false);
        setCounterMovies(0);
        setCounterSeries(0);

    }
    const handleClickSeries = () => {
        titleHandler4();
        setSerieCardShow(true);
        setMovieCardShow(false);
        setEnablePageOfSeries(true);
        setEnablePageOfMovies(false);
        setCounterMovies(0);
        setCounterSeries(0);

    }
    const goForwards = async () => {

        if (enablePageOfMovies && !enablePageOfSeries) {

            setCounterMovies(counterMovies + 1)
            let response = await axios.get(`http://justforkicks.duckdns.org:8080/api/listResults?type=movie&page=${counterMovies + 1}&perPage=10&genre=null&year=null`);
            setMovies(response.data);

            // console.log('MOVIES ' + counterMovies);
            // console.log(response);

        } else if (enablePageOfSeries && !enablePageOfMovies) {

            setCounterSeries(counterSeries + 1)
            let response = await axios.get(`http://justforkicks.duckdns.org:8080/api/listResults?type=series&page=${counterSeries + 1}&perPage=50&genre=null&year=null`);
            setSeries(response.data);

            // console.log('SERIES ' + counterSeries);
            // console.log(response);
        }
    }

    const goBackwards = async () => {

        if (enablePageOfMovies && !enablePageOfSeries) {

            if (counterMovies >= 0) {
                setCounterMovies(counterMovies - 1)
            }
            else {
                return;
            }

            let response = await axios.get(`http://justforkicks.duckdns.org:8080/api/listResults?type=movie&page=${counterMovies}&perPage=10&genre=null&year=null`);
            setMovies(response.data);

            console.log('MOVIES ' + counterMovies);
            console.log(response);

        } else if (enablePageOfSeries && !enablePageOfMovies) {

            if (counterSeries >= 0) {
                setCounterSeries(counterSeries - 1)
            } else {
                return;
            }
            let response = await axios.get(`http://justforkicks.duckdns.org:8080/api/listResults?type=series&page=${counterSeries}&perPage=50&genre=null&year=null`);
            setSeries(response.data);

            console.log('SERIES ' + counterSeries);
            console.log(response);
        }
    }

    return (
        <BrowserRouter>
            <Bg />
            <Hamburger
            // handle1={titleHandler1}
            // handle2={titleHandler2}
            // handle3={titleHandler3}
            // handle4={titleHandler4}
            // handle5={titleHandler5}
            // handle6={titleHandler6}
            />
            <Header result={result} />
            <NavList

                handle1={titleHandler1}
                handle2={titleHandler2}
                handle3={handleClickMovies}
                handle4={handleClickSeries}
                handle5={titleHandler5}
                handle6={titleHandler6}
            />
            <Toolbar />
            <Selection
                clickedForwards={goForwards}
                clickedBackwards={goBackwards}
                enabled={enablePageOfMovies || enablePageOfSeries}
            // enabledBack={enablePageOfMovies || enablePageOfSeries || enabledBackButton}
            />
            {
                movieCardShow && (
                    <div className={classes.CardSection}>
                        {movies.map(movie => {
                            return (
                                <Card
                                    key={movie.id}
                                    name={movie.rawName}
                                    picture={movie.picture}
                                    quality={movie.quality}
                                    genre={movie.genre} />
                            )
                        })}
                    </div>
                )
            }
            {
                serieCardShow && (
                    <div className={classes.CardSection}>
                        {series.map(serie => {
                            return (
                                <Card
                                    key={serie.id}
                                    name={serie.rawName}
                                    picture={serie.picture}
                                    quality={serie.quality}
                                    genre={serie.genre} />
                            )
                        })}
                    </div>
                )
            }
        </BrowserRouter>
    )
}

export default Layout;

