import React from "react";
import classes from "./CvButton.module.css";

export default function CvButton() {
    return (
        <button className={[classes.btn, classes.btn2].join(" ")}>
            Hover Me
        </button>
    );
}
