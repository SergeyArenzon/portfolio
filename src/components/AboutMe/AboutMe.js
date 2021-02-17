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
                        <i className="fab fa-linkedin fa-2x"></i>
                    </li>

                    <li>
                        <i class="fab fa-github-square fa-2x"></i>
                    </li>
                    <li>
                    <i class="fas fa-envelope-square fa-2x"></i>
                    </li>
                    <li>
                    <i class="fab fa-facebook-square fa-2x"></i>
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
