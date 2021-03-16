import React from "react";
import classes from "./TechIcon.module.css";

export default function TechIcon(props) {

 

    return (
        <div className={classes.TechIcon}>
            <div>{props.iconName}<div></div></div>
            <img
                src={require(`../../../assets/icons/${props.iconName}.svg`).default}
                alt="icons"
            />
        </div>
    );
}
