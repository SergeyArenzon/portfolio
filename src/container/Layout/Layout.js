import React from "react";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Picture from "../../components/Picture/Picture";
import Video from '../../components/Background/Background';


// =========================
// Main scrolling background
// =========================

export default function Layout() {
    return (
        <div className={classes.Layout}>
            
            <Video/>
            <Navbar />
            <Picture />
            <div className={classes.c}>test div</div>
        </div>
    );
}
