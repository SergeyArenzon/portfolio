import React from "react";
// import background from "../../assets/video/background.mp4";
import classes from "./Background.module.css";
import coding from './coding.mp4'


// ================
// Video background
// ================

export default function Background() {
    if(window.scrollY > 600){

    }
    return (
        <video autoPlay loop muted className={classes.Background}>
            {<source src={coding} type="video/mp4" />}
        </video>
    );
}
