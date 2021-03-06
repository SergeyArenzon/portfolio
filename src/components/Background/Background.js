import React from "react";
import background from "../../assets/video/background.mp4";
import classes from "./Background.module.css";

// ================
// Video background
// ================

export default function Background() {
    if(window.scrollY > 600){

    }
    return (
        <video autoPlay loop muted className={classes.Background}>
            {window.scrollY > 600 ? <source src={background} type="video/mp4" /> : null}
        </video>
    );
}
