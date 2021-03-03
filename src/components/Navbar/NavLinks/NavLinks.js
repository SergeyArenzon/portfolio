import React from "react";
import classes from "./NavLinks.module.css";

export default function NavLinks(props) {
    let showNavLinks = null;

    if (props.showFullscreenLinks) {
        showNavLinks = classes.DisplayNavLinks;
    }

    return (
        <div className={[classes.NavLinks, showNavLinks].join(" ")}>
            <div>
                HOME <div></div>
            </div>
            <div>
                ABOUT <div></div>
            </div>
            <div>
                PROJECTS<div></div>
            </div>
            <div>
                CONTACT<div></div>
            </div>
        </div>
    );
}
