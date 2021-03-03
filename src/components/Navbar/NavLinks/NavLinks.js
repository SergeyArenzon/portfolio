import React from "react";
import classes from "./NavLinks.module.css";

export default function NavLinks(props) {
    let showNavLinks = null;

    if (props.showFullscreenLinks) {
        showNavLinks = classes.DisplayNavLinks;
    }

    return (
        <ul className={[classes.NavLinks, showNavLinks].join(" ")}>
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
