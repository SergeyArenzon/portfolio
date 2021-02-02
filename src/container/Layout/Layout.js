import React from "react";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Picture from "../../components/Picture/Picture";
import Video from '../../components/Background/Background';
import AboutMe from '../../components/AboutMe/AboutMe';


// =========================
// Main scrolling background
// =========================

export default function Layout() {
    return (
        <div className={classes.Layout}>
            
            <Video/>
            <Navbar />
            <Picture />
            <AboutMe/>
            <div className={classes.c}>tessdfsdfsfdst div</div>
        </div>
    );
}
