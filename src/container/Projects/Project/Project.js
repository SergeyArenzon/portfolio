import React, {useState} from "react";
import classes from "./Project.module.css";
import VisibilitySensor from "react-visibility-sensor";

export default function Project() {

    const [show, setShow] = useState(false);


    const onChange = (isVisible) => {
        if (isVisible) {
            setShow(true);
            console.log('----------------------')
        }
    };



    return (
        <VisibilitySensor partialVisibility onChange={onChange}>
            <div className={show  ? classes.ShowenProject : classes.HiddenProject}></div>
         </VisibilitySensor>
    );
}
