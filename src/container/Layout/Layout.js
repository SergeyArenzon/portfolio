import React from "react";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Picture from "../../components/Picture/Picture";
import video from "../../assets/video/background.mp4";

// =========================
// Main scrolling background
// =========================

export default function Layout() {
    return (
        <div className={classes.Layout}>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <Navbar />
            <Picture />
            <div className={classes.c}>test div</div>
        </div>
    );
}
