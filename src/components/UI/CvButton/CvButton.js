import React from "react";
import classes from "./CvButton.module.css";

export default function CvButton(props) {
    let resumeLink = null;
    if (props.type === "resume_link") {
        resumeLink = (
            <a
                href="https://drive.google.com/file/d/1iHvafMuQtOUPPdN73elV3h-9ZGQilIVT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
            >
                RESUME
            </a>
        );
    }
    if (props.type === "github") {
        resumeLink = (
            <a
                href={props.url}
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>
        );
    }

    return <button className={[classes.btn, props.colored && classes.WhiteBtn].join(' ')}>{resumeLink}</button>;
}
