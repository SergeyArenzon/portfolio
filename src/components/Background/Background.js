import React from "react";
import background from "../../assets/video/background.mp4";
import classes from "./Background.module.css";

// ================
// Video background
// ================

export default function Background() {
    return (
        <video autoPlay loop muted className={classes.Background}>
            <source src={background} type="video/mp4" />
        </video>
    );
}
