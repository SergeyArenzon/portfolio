import React from 'react';
import background from '../../assets/video/background.mp4';
import classes from './Video.module.css';
export default function Video() {
    return (
             <video autoPlay loop muted className={classes.Video}>
                <source src={background} type="video/mp4" />
            </video>
    )
}
