import React, { useState, useEffect } from "react";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Picture from "../../components/Picture/Picture";
import Video from "../../components/Background/Background";
import AboutMe from "../../components/AboutMe/AboutMe";

// =========================
// Main scrolling background
// =========================

export default function Layout() {
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        console.log('useEffect');
        return () => window.removeEventListener("scroll", onScroll);
        // eslint-disable-next-line
    },[]);

    const [navColor, setNavColor] = useState(null);
    const [x, setX] = useState(null);
    const [scrollTop, setScrollTop] = useState(0);

    //  Gets the scrolled position for the navbar
    const progressBarHandler = () => {
        const winScroll = document.documentElement.scrollTop; // scrolled vertically by px
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    };

    // Checks if user on mobile mode
    const isMobile = () => {
        return window.innerWidth <= 800;
    };

    const mobileHandler = () => {
        if (isMobile() && window.scrollY > 600) {
            setX(classes.Swipe);
            return;
        }
    };

    const onScroll = () => {
        console.log(window.scrollY);

        //  Mobile effect handler
        mobileHandler();

        // progreebar handler
        progressBarHandler();

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
            <Navbar color={navColor} scrollTop={scrollTop} />
            <Picture />
            <AboutMe />
            <div className={[x, classes.Div].join(" ")}></div>
        </div>
    );
}
