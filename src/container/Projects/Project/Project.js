import React, { useState } from "react";
import classes from "./Project.module.css";
import VisibilitySensor from "react-visibility-sensor";
import pic from "./../../../assets/images/profile.jpeg";
import TechIcon from "../../../components/UI/TechIcon/TechIcon";

export default function Project(props) {
    const [show, setShow] = useState(false);
    const [techIconsVisible, setTechIconsVisible] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);
    const [descriptionVisible, setDescriptionVisible] = useState(false);

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
    // TITLE VISIBILITY TRIGGER FUNC
    const onTitleVisibility = (isVisible) => {
        if (isVisible) {
            setTitleVisible(true);
        }
    };
    // DESCRIPTION VISIBILITY TRIGGER FUNC
    const onDescriptionVisibility = (isVisible) => {
        if (isVisible) {
            setDescriptionVisible(true);
        }
    };

    let projectClasses = null;
    let projectTitleColored = null;
    if (props.colored) {
        projectClasses = classes.Project;
        projectTitleColored = classes.ProjectTitleColored;
    } else {
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
                {/* PROJECT TITLE */}
                <VisibilitySensor
                    partialVisibility
                    onChange={onTitleVisibility}
                >
                    <h1
                        className={`${classes.Item} ${
                            classes.ProjectTitleFont
                        } ${projectTitleColored} ${
                            !titleVisible ? classes.HiddenItem : null
                        }`}
                    >
                        {props.projectData.name}
                    </h1>
                </VisibilitySensor>

                {/* PROJECT IMAGE */}
                <VisibilitySensor
                    partialVisibility
                    offset={"0px"}
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
                                : [classes.Item, classes.HiddenItem].join(" ")
                        }
                    />
                </VisibilitySensor>

                {/* PROJECT DESCRIPTION */}
                <VisibilitySensor  partialVisibility
                    
                    onChange={onDescriptionVisibility}>
                    <p
                        className={`${classes.Item} ${classes.ProjectDescription} ${projectTitleColored} ${!descriptionVisible ? classes.HiddenItem : null}`}
                    >
                        {props.projectData.description}
                    </p>
                </VisibilitySensor>

                {/* PROJECT STACK ICONS */}
                <VisibilitySensor
                    partialVisibility
                    onChange={onTechIconsVisibility}
                >
                    <ul className={`${classes.Item} ${classes.TechContainer}`}>
                        {techList}
                    </ul>
                </VisibilitySensor>

                <div className={classes.Item}>
                    {/* PROJECT LIVE + GITHUB */}
                    <div>{props.projectData.github}</div>

                    {/* PROJECT LIVE DEMO */}
                    {/* CHECK LIVE DEMO LINK EXISTENCE */}
                    {props.projectData.liveDemo ? (
                        <div>{props.projectData.liveDemo}</div>
                    ) : null}
                </div>
            </div>
        </>
    );
}
