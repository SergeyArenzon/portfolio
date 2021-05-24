import React from 'react';
import classes from './Logo.module.css';

export default function Logo() {
    return (
        <div className={classes.Logo}>
            <span>&lt;</span><span className={classes.S}>S</span>ergey<span className={classes.Slash}>&#47;</span><span>&gt;</span>
        </div>
    )
}
