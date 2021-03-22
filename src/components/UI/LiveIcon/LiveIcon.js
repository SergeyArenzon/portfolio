import React from "react";
import classes from "./LiveIcon.module.css";

export default function LiveIcon(props) {
    return (
        <a className={classes.LiveIcon} href={props.url} target="_blank" rel="noreferrer">
            Live Demo
        </a>
    );
}
