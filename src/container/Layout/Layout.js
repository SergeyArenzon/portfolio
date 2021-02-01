import React from "react";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Picture from "../../components/Picture/Picture";

// =========================
// Main scrolling background
// =========================

export default function Layout() {
    return (
        <div className={classes.Layout}>
            <Navbar />
            <Picture />
            <div className={classes.c}></div>
        </div>
    );
}
