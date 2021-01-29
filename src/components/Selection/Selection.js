import React from 'react';
import classes from './_selection.module.scss';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Selection = (props) => {
    return (
        <div className={classes.Selection}>
            <select className={classes.Selection__select}>
                <option value="12">12</option>
                <option value="24">24</option>
                <option defaultValue value="48">48</option>
                <option value="96">96</option>
            </select>
            <div className={classes.Selection__buttons}>
                <button
                    className={classes.Selection__button}
                    disabled={!props.enabled}
                    onClick={props.clickedBackwards}
                >
                    <FontAwesomeIcon
                        icon={faBackward}
                        size='lg'
                        
                    />

                </button>
                <button
                    // disabled={!props.enabledSeries}
                    disabled={!props.enabled}
                    className={classes.Selection__button}
                    onClick={props.clickedForwards}
                >
                    <FontAwesomeIcon
                        icon={faForward}
                        size='lg'
                    />

                </button>
            </div>
        </div>
    )
}

export default Selection;