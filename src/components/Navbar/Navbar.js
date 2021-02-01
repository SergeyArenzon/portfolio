import React from "react";
import Logo from '../Logo/Logo';
import classes from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={classes.Navbar}>
            <Logo />
        </nav>
    );
}
