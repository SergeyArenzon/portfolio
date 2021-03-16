import React, { useState } from "react";
import classes from "./Project.module.css";
import VisibilitySensor from "react-visibility-sensor";
import pic from "./../../../assets/images/profile.jpeg";
import TechIcon from "../../../components/UI/TechIcon/TechIcon";

export default function Project(props) {
    const [show, setShow] = useState(false);

    const onChange = (isVisible) => {
        if (isVisible) {
            setShow(true);
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

    const techList = props.projectData.technologies.map((tech, index) => {
        return <TechIcon iconName={tech} />;
    });

    return (
        <VisibilitySensor
            partialVisibility
            offset={{ bottom: 300 }}
            onChange={onChange}
        >
            <>
                <div className={projectClasses}>
                    <h1 className={classes.Item}>{props.projectData.name}</h1>
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
                    <div>
                        <p className={classes.Item}>
                            {props.projectData.description}
                        </p>
                    </div>

                    <div className={`${classes.Item} ${classes.TechContainer}`}>{techList}</div>
                    <div className={classes.Item}>
                        {props.projectData.github}
                    </div>
                    <div className={classes.Item}>
                        {props.projectData.liveDemo}
                    </div>
                </div>
            </>
        </VisibilitySensor>
    );
}
