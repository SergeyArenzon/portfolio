import React from "react";
import classes from "./AboutMe.module.css";

export default function AboutMe() {
    return (
        <div className={classes.AboutMe}>
            <div className={classes.LeftSide}>
                <div className={classes.Profile}></div>
            </div>
            <div className={classes.RightSide}>
                <h1>
                    ABOUT <label>ME</label>
                </h1>
                <p>lorema asf sdf gfdfgslma ;sdfk;a lsds;gi js;dlgm</p>

            </div>

        </div>
    );
}
