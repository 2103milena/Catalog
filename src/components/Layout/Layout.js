import React, { useEffect, useState } from 'react';
import { useDencrypt } from "use-dencrypt-effect";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import { BrowserRouter } from 'react-router-dom';
import NavList from '../Buttons/NavList';
import Header from '../Header/Header';
import Bg from '../Bg/Bg';
import Hamburger from '../Hamburger/Hamburger';
import Card from '../Card/Card';

import classes from './_layout.module.scss';
import axios from 'axios';


const Layout = () => {

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    const [movieCardShow, setMovieCardShow] = useState(false);
    const [serieCardShow, setSerieCardShow] = useState(false);

    const values = ["Favourites", "Must Watch", "Movies", "Series", "Games", "Not Inserted"];

    const { result, dencrypt } = useDencrypt();

    const titleHandler1 = () => {
        return dencrypt(values[0]);
    }
    const titleHandler2 = () => {
        return dencrypt(values[1]);
    }
    const titleHandler3 = () => {
        return dencrypt(values[2]);
    }
    const titleHandler4 = () => {
        return dencrypt(values[3]);
    }
    const titleHandler5 = () => {
        return dencrypt(values[4]);
    }
    const titleHandler6 = () => {
        return dencrypt(values[5]);
    }

    const urlMovies = 'http://justforkicks.duckdns.org:8080/api/listResults?type=movie&page=0&perPage=50&genre=null&year=null';

    const urlSeries = 'http://justforkicks.duckdns.org:8080/api/listResults?type=series&page=0&perPage=50&genre=null&year=null';

    useEffect(() => {
        getAllMovies();
        getAllSeries();
    }, [])

    const getAllMovies = () => {
        axios.get(urlMovies)

            .then(response => {
                const allMovies = response.data;
                setMovies(allMovies)
            })
            .catch(error =>
                console.log(error)
            )
    }

    const getAllSeries = () => {
        axios.get(urlSeries)

            .then(response => {
                const allSeries = response.data;
                setSeries(allSeries)
            })
            .catch(error =>
                console.log(error)
            )
    }

    const handleClickMovies = () => {
        titleHandler3();
        setMovieCardShow(true)
        setSerieCardShow(false)
    }

    const handleClickSeries = () => {
        titleHandler4();
        setSerieCardShow(true)
        setMovieCardShow(false)

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

            {
                movieCardShow &&  (
                    <div className={classes.CardSection}>
                        {movies.map(movie => {
                            return <Card
                                key={movie.id}
                                name={movie.rawName}
                                picture={movie.picture}
                                quality={movie.quality}
                                genre={movie.genre} />
                        })}
                    </div>
                )
            }
            {
                serieCardShow && (
                    <div className={classes.CardSection}>
                        {series.map(serie => {
                            return <Card
                                key={serie.id}
                                name={serie.rawName}
                                picture={serie.picture}
                                quality={serie.quality}
                                genre={serie.genre} />
                        })}
                    </div>
                )
            } 

        </BrowserRouter>
    )
}

export default Layout;

