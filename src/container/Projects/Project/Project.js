import React, { useState } from "react";
import classes from "./Project.module.css";
import VisibilitySensor from "react-visibility-sensor";
import pic from "./../../../assets/images/profile.jpeg";

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

    return (
        <VisibilitySensor partialVisibility offset={{bottom:300}} onChange={onChange}>
            <div className={projectClasses}>
                <div className={classes.PictureContainer}>
                    <img
                        src={pic}
                        alt={""}
                        className={[
                            pictureClasses,
                            show ?  props.colored ? [classes.ShowenPicture, classes.RotateLeft].join(' ') : [classes.ShowenPicture, classes.RotateRight].join(' ') : null,
                        ].join(" ")}
                    />
                </div>

                <div class={classes.Description}>
                    <p>{props.projectData.description}</p>
                </div>
            </div>
        </VisibilitySensor>
    );
}
