import React from "react";
import classes from "./AboutMe.module.css";

export default function AboutMe() {
    return (
        <div className={classes.AboutMe}>
            <div className={classes.LeftSide}>
                <h1>About</h1>
                <div className={classes.Profile}></div>
                
            </div>
            <div className={classes.RightSide}>
                <h1>
                    ME
                </h1>
                <p>lorema asf sdf gfdfgslma ;sdfk;a lsds;gi js;dlgm</p>

            </div>

        </div>
    );
}
