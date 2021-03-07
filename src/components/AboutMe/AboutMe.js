import React, { useState } from "react";
import classes from "./AboutMe.module.css";
import Clouds from "../UI/Clouds/Clouds";
import CvButton from "../UI/CvButton/CvButton";

export default function AboutMe() {
    console.log(window.scrollY);

    const [visible, setVisible] = useState(false);

    if (!visible && window.scrollY > 600) {
        setVisible(true);
    } else {
        // setVisible(false);
    }

    const socialIcons = (
        <ul className={visible ? null : classes.HideLeft}>
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
    );

    return (
        <div>
            <div className={classes.AboutMe}>
                <div className={classes.LeftSide}>
                    <h1
                        className={[
                            classes.AboutText,
                            visible ? null : classes.HideLeft,
                        ].join(" ")}
                    >
                        About<h1 className={classes.MeText}>ME</h1>
                    </h1>

                    <div
                        className={[
                            classes.Profile,
                            visible ? null : classes.HideLeft,
                        ].join(" ")}
                    ></div>
                    {socialIcons}

                    <div className={classes.Tail}>
                        <div></div>
                    </div>
                </div>
                <div
                    className={[
                        classes.RightSide,
                        visible ? classes.Shake : null,
                    ].join(" ")}
                >
                    <p className={classes.TextP}>
                        I'am BS.c graduate of{" "}
                        <strong>Computer Science & Mathematics</strong> and web
                        fullstack developer course.<br></br> Experienced with
                        the newest technologies like{" "}
                        <strong>
                            React, Redux, React Hooks, NodeJS, ExpressJS &
                            MongoDB
                        </strong>
                        .<br></br>
                        Aquired good knowledge in{" "}
                        <strong>JavaScript & CSS</strong> with very good
                        interpersonal skills and a part time{" "}
                        <strong>
                            GAMER <i className="fas fa-gamepad"></i>
                        </strong>
                    </p>
                    <CvButton type="resume_link">RESUME</CvButton>
                </div>
            </div>
            <Clouds />
        </div>
    );
}
