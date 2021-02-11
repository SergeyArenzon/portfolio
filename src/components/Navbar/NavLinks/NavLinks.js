import React from 'react';
import classes from'./NavLinks.module.css';

export default function NavLinks() {
    return (
        <div className={classes.NavLinks}>
                <div>HOME <div></div></div>
                <div>ABOUT <div></div></div>
                <div>PROJECTS<div></div></div>
                <div>CONTACT<div></div></div>
        </div>
    )
}
