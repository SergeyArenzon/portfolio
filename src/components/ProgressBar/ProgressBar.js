import React from 'react';
import classes from './ProgressBar.module.css';

export default function ProgressBar(props) {
    return (
        <div className={classes.ProgressWrapper}>
        <div
            className={classes.ProgressStyle}
            style={{ width: `${props.scrollTop}%` }}
        ></div>
    </div>
    )
}
