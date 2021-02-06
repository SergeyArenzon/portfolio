import React, { useState, useEffect } from "react";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Picture from "../../components/Picture/Picture";
import Video from "../../components/Background/Background";
import AboutMe from "../../components/AboutMe/AboutMe";
import useIsInViewport from "use-is-in-viewport";

// =========================
// Main scrolling background
// =========================

export default function Layout() {
    useEffect(() => {
        window.addEventListener("scroll", pop);

        return () => window.removeEventListener("scroll", pop);
    }, []);

    const [navColor, setNavColor] = useState(null);
    const [x, setX] = useState(null);
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop; // scrolled vertically by px
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    };

    const isMobile = () => {
        return window.innerWidth <= 800;
    };

    const mobileHandler = () => {
        if (isMobile() && window.scrollY > 600) {
            setX(classes.Swipe);
            return;
        }
    };

    const pop = () => {
        console.log(window.scrollY);

        //  Mobile effect handler
        mobileHandler();
        onScroll();

        if (!isMobile() && window.scrollY > 1200) {
            setX(classes.Swipe);
            return;
        }

        if (window.scrollY > 927 && window.scrollY < 1200) {
            setNavColor("red");
            return;
        }

        setNavColor(null);
    };

    return (
        <div className={classes.Layout}>
            <Video />
            <Navbar color={navColor} />

            <div className={classes.ProgressWrapper}>
                <div
                    className={classes.ProgressStyle}
                    style={{ width: `${scrollTop}%` }}
                ></div>
            </div>

            <Picture />
            <AboutMe />
            <div className={classes.c}>tessdfsdfsfdst div</div>
            <div className={[x, classes.Div].join(" ")}></div>
        </div>
    );
}
