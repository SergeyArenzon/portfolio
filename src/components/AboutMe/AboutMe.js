import React from "react";
import classes from "./AboutMe.module.css";

export default function AboutMe() {
    return (
        <div className={classes.AboutMe}>
            <div className={classes.LeftSide}>
                <h1 className={classes.AboutText}>
                    About<h1 className={classes.MeText}>ME</h1>
                </h1>
                <div className={classes.Profile}></div>
                <ul>
                    <li>
                        <i className="fab fa-linkedin-in fa-lg"></i>
                    </li>

                    <li>
                        <i className="fab fa-github fa-2x"></i>
                    </li>
                    <li>
                        <i className="fas fa-envelope fa-lg"></i>
                    </li>
                    <li>
                        <i className="fab fa-facebook fa-2x"></i>
                    </li>
                </ul>
                <div className={classes.Tail}>
                    <div></div>
                </div>
            </div>
            <div className={classes.RightSide}>
                <p>lorema asf sdf gfdfgslma ;sdfk;a lsds;gi js;dlgm</p>
            </div>
        </div>
    );
}
