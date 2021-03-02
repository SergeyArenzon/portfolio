import React, { useState, useEffect } from "react";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Picture from "../../components/Picture/Picture";
import Video from "../../components/Background/Background";
import AboutMe from "../../components/AboutMe/AboutMe";
import Projects from "../Projects/Projects";

// =========================
// Main scrolling background
// =========================

export default function Layout() {
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        console.log("useEffect");
        return () => window.removeEventListener("scroll", onScroll);
        // eslint-disable-next-line
    }, []);

    const [navColor, setNavColor] = useState(false);
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
    const onScroll = () => {
        // progressbar handler
        progressBarHandler();

        if (window.scrollY > 50) {
            setNavColor(true);
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
            <Projects />
        </div>
    );
}
