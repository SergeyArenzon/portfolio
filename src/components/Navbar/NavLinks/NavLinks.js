import React from "react";
import classes from "./NavLinks.module.css";

export default function NavLinks(props) {
    let showNavLinks = null;
    let slideLink = null;

    if (props.showFullscreenLinks) {
        showNavLinks = [classes.DisplayNavLinks];
        slideLink = [classes.Slide];

    }

    return (
        <ul className={[classes.NavLinks, showNavLinks, slideLink].join(" ")}>
            <li>
                HOME <div></div>
            </li>
            <li>
                ABOUT <div></div>
            </li>
            <li>
                PROJECTS<div></div>
            </li>
            <li>
                CONTACT<div></div>
            </li>
        </ul>
    );
}
