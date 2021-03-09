import classes from "./Projects.module.css";
import React from "react";
import project_list from "./project_list.json";
import Project from "./Project/Project";






// Projects list mapping ti li's 
const projects = project_list.map((project, index) => {
    if (index % 2) {
        return (
            <li key={index}>
                <div className={classes.Skew}></div>
                <Project projectData={project} colored={true} />
                <div className={classes.SkewReverse}></div>
            </li>
        );
    } else {
        return (
            <li key={index}>
                <Project projectData={project} colored={false} />
            </li>
        );
    }
});

export default function Projects() {
    return (
        <div className={classes.Projects}>
            <div className={classes.Title}>
                <h1>
                    <span>P</span>ROJECTS
                </h1>
                <svg
                    className={classes.Curve}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height="100"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 100 C 20 0 50 0 100 100 Z" />
                </svg>
            </div>

            <ul className={classes.ProjectsList}>{projects}</ul>
        </div>
    );
}
