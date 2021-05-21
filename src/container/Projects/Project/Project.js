import React, { useState } from 'react';
import classes from './Project.module.css';
import VisibilitySensor from 'react-visibility-sensor';
import TechIcon from '../../../components/UI/TechIcon/TechIcon';
import LiveIcon from '../../../components/UI/LiveIcon/LiveIcon';
import CvButton from '../../../components/UI/CvButton/CvButton';

export default React.memo(function Project(props) {
    const [show, setShow] = useState(false);
    const [techIconsVisible, setTechIconsVisible] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    // IMAGE VISIBILITY TRIGGER FUNC
    const onChange = (isVisible) => {
        if (isVisible) {
            console.log('----------');
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
        projectClasses = [classes.Project, classes.ProjectReverse].join(' ');
    }

    // TECH ICONS LIST MAPPING
    const techList = props.projectData.technologies.map((tech, index) => {
        return (
            <li
                key={index}
                className={[
                    classes.TechIconLi,
                    techIconsVisible ? classes.TechIconVisible : null,
                ].join(' ')}
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
                    <div className={classes.ImageContainer} >
                        <img
                            style={props.projectData.name ==='MyAppartment' ? {height:'400px',width: 'auto', transform:'translateY(0)'} : null}
                            src={props.image}
                            alt={''}
                            className={
                                show
                                    ? [
                                          classes.Item,
                                          classes.ShowenPicture,
                                      ].join(' ')
                                    : [classes.Item, classes.HiddenItem].join(
                                          ' '
                                      )
                            }
                        />
                        <svg
                            className={`${classes.Bulb} ${projectTitleColored && classes.WhiteBulb}`}
                            id="visual"
                            viewBox="0 0 500 500"
                            width="500"
                            height="500"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                        >
                            <g transform="translate(229.25185259310652 244.3487189088508)">
                                <path
                                    d="M130.1 -216.6C158.8 -208.7 165.6 -154.1 178.6 -110.2C191.6 -66.3 210.8 -33.2 227.2 9.5C243.5 52.1 257.1 104.2 228.5 121.1C200 138 129.3 119.7 84.2 138C39.1 156.3 19.5 211.2 -8.1 225.1C-35.7 239.1 -71.3 212.2 -109.1 189.7C-147 167.2 -186.9 149.1 -199.1 118.2C-211.3 87.3 -195.6 43.7 -190.3 3.1C-185 -37.5 -189.9 -75 -181.8 -113C-173.7 -150.9 -152.6 -189.3 -120.1 -195.1C-87.7 -200.8 -43.8 -173.9 3.4 -179.8C50.7 -185.8 101.3 -224.5 130.1 -216.6"
                                    fill= {projectTitleColored ? "white" : "#4163e1"}
                                ></path>
                            </g>
                        </svg>
                    </div>
                </VisibilitySensor>

                {/* PROJECT DESCRIPTION */}
                <VisibilitySensor
                    partialVisibility
                    onChange={onDescriptionVisibility}
                >
                    <pre
                        className={`${classes.Item} ${
                            classes.ProjectDescription
                        } ${projectTitleColored} ${
                            !descriptionVisible ? classes.HiddenItem : null
                        }`}
                    >
                        {props.projectData.description}
                    </pre>
                </VisibilitySensor>

                {/* PROJECT STACK ICONS */}
                <VisibilitySensor
                    partialVisibility
                    onChange={onTechIconsVisibility}
                >
                    <div>
                        <div className={classes.StackTabContainer}>
                            <div className={[classes.StackTab, !projectTitleColored && classes.StackTabColored].join(' ')}>Tech Stack</div>
                        </div>

                        <ul
                            className={`${classes.Item} ${classes.TechContainer}`}
                        >
                            {techList}
                        </ul>
                    </div>
                </VisibilitySensor>

                {/* GITGUB & LIVE DEMOS ITEM */}
                <div className={`${classes.Item} ${classes.LiveDemoItem}`}>
                    <div className={classes.BtnContainer}>
                        {/* PROJECT LIVE + GITHUB */}
                        <CvButton type={'github'} url={props.projectData.github} colored={projectTitleColored}/>    

                        {/* PROJECT LIVE DEMO */}
                        {/* CHECK LIVE DEMO LINK EXISTENCE */}
                        {props.projectData.liveDemo ? (
                            <LiveIcon url={props.projectData.liveDemo} colored={projectTitleColored}/>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
});
