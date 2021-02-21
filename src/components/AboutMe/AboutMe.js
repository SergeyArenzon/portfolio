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
                        <a
                            href="https://www.linkedin.com/in/sergeyarenzon/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin-in fa-lg"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/SergeyArenzon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:arenzonsergey@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fas fa-envelope fa-lg"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/ArenzonSergey/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                    </li>
                </ul>
                <div className={classes.Tail}>
                    <div></div>
                </div>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.Text}></div>
            </div>
        </div>
    );
}
