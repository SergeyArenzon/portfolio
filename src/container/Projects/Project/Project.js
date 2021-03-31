import React, { useState } from "react";
import classes from "./Project.module.css";
import VisibilitySensor from "react-visibility-sensor";
import pic from "./../../../assets/images/profile.jpeg";
import TechIcon from "../../../components/UI/TechIcon/TechIcon";
import LiveIcon from '../../../components/UI/LiveIcon/LiveIcon';
import GithubIcon from '../../../components/UI/GithubIcon/GithubIcon';

export default function Project(props) {
    const [show, setShow] = useState(false);
    const [techIconsVisible, setTechIconsVisible] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    // IMAGE VISIBILITY TRIGGER FUNC
    const onChange = (isVisible) => {
        if (isVisible) {
            console.log("----------");
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
                key={index}
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
                <VisibilitySensor partialVisibility onChange={onChange}>
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
                <VisibilitySensor
                    partialVisibility
                    onChange={onDescriptionVisibility}
                >
                    <p
                        className={`${classes.Item} ${
                            classes.ProjectDescription
                        } ${projectTitleColored} ${
                            !descriptionVisible ? classes.HiddenItem : null
                        }`}
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
                        {/* <li className={classes.StackItem}></li> */}
                        {techList}
                    </ul>
                </VisibilitySensor>

                        {/* GITGUB & LIVE DEMOS ITEM */}
                <div className={`${classes.Item} ${classes.LiveDemoItem}`}>
                        
                        <div className={classes.LiveDemoItemContainer}> 

                            {/* PROJECT LIVE + GITHUB */}
                            <GithubIcon url={props.projectData.github} />

                            {/* PROJECT LIVE DEMO */}
                            {/* CHECK LIVE DEMO LINK EXISTENCE */}
                            {props.projectData.liveDemo ? (
                                <LiveIcon url={props.projectData.liveDemo}/>
                            
                            ) : null}
 
                        </div>
                        
                </div>
            </div>
        </>
    );
}
