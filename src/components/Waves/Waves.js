import React from "react";
import classes from "./Waves.module.css";

export default function Waves() {
    return (
        <section>
            <div className={[classes.Wave, classes.Wave1].join(" ")}></div>
            <div className={[classes.Wave, classes.Wave2].join(" ")}></div>
            <div className={[classes.Wave, classes.Wave3].join(" ")}></div>
            <div className={[classes.Wave, classes.Wave4].join(" ")}></div>
        </section>
    );
}
