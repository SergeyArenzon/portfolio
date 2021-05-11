import classes from './Projects.module.css';
import React from 'react';
import project_list from './project_list.json';
import Project from './Project/Project';
import myburger from '../../assets/images/myburger.gif'
import myappartment from '../../assets/images/myappartment.gif'


const map = new Map();
map.set('MyBurger', myburger);
map.set('MyAppartment', myappartment);




export default function Projects() {

    // Projects list mapping ti li's
    const projects = project_list.map((project, index) => {
        
        if (index % 2) {
            return (
                <li key={index}>
                    <div className={classes.Skew}></div>
                    <Project
                        projectData={project}
                        colored={true}
                        image={map.get(project.name)}
                    />
                    <div className={classes.SkewReverse}></div>
                </li>
            );
        } else {
            return (
                <li key={index}>
                    <Project
                        projectData={project}
                        colored={false}
                        image={map.get(project.name)}
                    />
                </li>
            );
        }
    });
    return (
        <div className={classes.Projects} id="projects">
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

            <svg
                className={classes.Seperator}
                width="100%"
                height="120"
                viewBox="0.1 0.1 180 40"
                preserveAspectRatio="none"
            >
                <g transform="translate(-18.298844,-77.973964)">
                    <path className={classes.Line}
                        
                        d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z"
                    />
                    <path
                        style={{ fill: 'white' }}
                        d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z"
                    />
                </g>
            </svg>
        </div>
    );
}
