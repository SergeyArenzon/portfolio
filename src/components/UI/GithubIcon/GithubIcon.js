import React from 'react';
import classes from './GithubIcon.module.css';

export default function GithubIcon(props) {
    return (
        <a className={classes.GithubIcon} href={props.url} target="_blank" rel="noreferrer">
       Github
    </a>
    )
}
