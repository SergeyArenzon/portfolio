import React, { useEffect, useState } from "react";
import classes from "./Layout.module.css";
import Typical from "react-typical";
import Logo from "../../components/Logo/Logo";
import Typewriter from "typewriter-effect";

export default function Layout() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setTimeout(function () {
            setShowText(true);
        }, 2000);
    }, []);

    let text = null;
    if (showText) {
        text = (
            <div className={classes.TypeSec}>
                <Typewriter
                    className={classes.TypeSec}
                    options={{
                        strings: [
                            "FULLSTACK Developer.",
                            "FRONTEND Developer.",
                            "BACKEND Developer.",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 20,
                    }}
                />
            </div>
        );
    }

    const staticText = (
        <Typewriter
            options={{
                strings: ["Hi my name is Sergey Arenzon and I'm a"],
                autoStart: true,
                loop: false,
                pauseFor: 1000000000000000000,
                delay: 40,
            }}
        />
    );
    return (
        <div className={classes.Layout}>
            <nav>
                <Logo />
            </nav>
            <div className={classes.Picture}>
                <div className={classes.TypingText}>
                    {staticText}
                    {text}
                    </div>
            </div>
        </div>
    );
}
