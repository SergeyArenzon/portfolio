import React from "react";
// import background from "../../assets/video/background.mp4";
import classes from "./Background.module.css";
import coding from './coding.mp4'


// ================
// Video background
// ================

export default React.memo(function Background() {
  
    return (
        <video autoPlay={true} loop muted className={classes.Background}>
            {<source src={coding} type="video/mp4" />}
        </video>
    );
})
