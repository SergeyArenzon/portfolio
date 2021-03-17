import React, { useState } from "react";
import classes from "./Project.module.css";
import VisibilitySensor from "react-visibility-sensor";
import pic from "./../../../assets/images/profile.jpeg";
import TechIcon from "../../../components/UI/TechIcon/TechIcon";

export default function Project(props) {
    const [show, setShow] = useState(false);
    const [techIconsVisible, setTechIconsVisible] = useState(false);

    // IMAGE VISIBILITY TRIGGER FUNC
    const onChange = (isVisible) => {
        if (isVisible) {
            setShow(true);
        }
    };

    // TECH ICONS VISIBILITY TRIGGER FUNC
    const onTechIconsVisibility = (isVisible) => {
        if (isVisible) {
            setTechIconsVisible(true);
        }
    };

    let pictureClasses = null;
    let projectClasses = null;
    if (props.colored) {
        pictureClasses = classes.HiddenPictureLeft;
        projectClasses = classes.Project;
    } else {
        pictureClasses = classes.HiddenPictureRight;
        projectClasses = [classes.Project, classes.ProjectReverse].join(" ");
    }

    // TECH ICONS LIST MAPPING
    const techList = props.projectData.technologies.map((tech, index) => {
        return (
            <li
                className={[
                    classes.TechIconLi,
                    techIconsVisible ? classes.TechIconVisible : null,
                ].join(" ")}
            >
                <TechIcon iconName={tech} />
            </li>
        );
    });

    return (
        <>
            <div className={projectClasses}>
                {/* PROJECT NAME */}
                <h1 className={classes.Item}>{props.projectData.name}</h1>

                {/* PROJECT IMAGE */}
                <VisibilitySensor
                    partialVisibility
                    offset={{ bottom: 300 }}
                    onChange={onChange}
                >
                    <img
                        src={pic}
                        alt={""}
                        className={
                            show
                                ? [classes.Item, classes.ShowenPicture].join(
                                      " "
                                  )
                                : [classes.Item, pictureClasses].join(" ")
                        }
                    />
                </VisibilitySensor>

                {/* PROJECT DESCRIPTION */}
                <div>
                    <p className={classes.Item}>
                        {props.projectData.description}
                    </p>
                </div>

                {/* PROJECT STACK ICONS */}
                <VisibilitySensor
                    partialVisibility
                    offset={{ bottom: 300 }}
                    onChange={onTechIconsVisibility}
                >
                    <ul className={`${classes.Item} ${classes.TechContainer}`}>
                        {techList}
                    </ul>
                </VisibilitySensor>

                {/* PROJECT LIVE DEMO */}
                <div className={classes.Item}>{props.projectData.github}</div>

                {/* PROJECT LIVE DEMO */}
                <div className={classes.Item}>{props.projectData.liveDemo}</div>
            </div>
        </>
    );
}
