import React from 'react';
import classes from './NavLinks.module.css';
import { Link } from 'react-scroll';

export default function NavLinks(props) {
    let showNavLinks = null;
    let slideLink = null;

    if (props.showFullscreenLinks) {
        showNavLinks = [classes.DisplayNavLinks];
        slideLink = [classes.Slide];
    }

    return (
        <ul className={[classes.NavLinks, showNavLinks, slideLink].join(' ')}>
            <li>
                <Link to="home" smooth={true} duration={1000}>
                    HOME <div></div>
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={1000}>
                    ABOUT <div></div>
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={1000}>
                    PROJECTS<div></div>
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={1000}>
                    CONTACT<div></div>
                </Link>
            </li>
        </ul>
    );
}
