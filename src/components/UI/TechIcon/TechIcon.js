import React from 'react';
import classes from './TechIcon.module.css';

export default function TechIcon(props) {
    let hintName = null;

    // CONVERTS TECH NAME TO PROPER HINT NAME
    switch (props.iconName) {
        case 'express':
            hintName = 'Express';
            break;
        case 'firebase':
            hintName = 'Firebase';
            break;
        case 'heroku':
            hintName = 'Heroku';
            break;
        case 'java':
            hintName = 'Java';
            break;
        case 'javascript':
            hintName = 'JavaScript';
            break;
        case 'jwt':
            hintName = 'JWT';
            break;
        case 'mongodb':
            hintName = 'Mongo';
            break;
        case 'netlify':
            hintName = 'Netlify';
            break;
        case 'nodejs':
            hintName = 'NodeJS';
            break;
        case 'python':
            hintName = 'Python';
            break;
        case 'react':
            hintName = 'React';
            break;
        case 'redux':
            hintName = 'Redux';
            break;
        case 'twitter':
            hintName = 'Twitter';
            break;
        case 'apache':
            hintName = 'Apache';
            break;
        case 'android':
            hintName = 'Android';
            break;
        default:
            break;
    }

    return (
        <div className={classes.TechIcon}>
            <div>
                {hintName}
                <div></div>
            </div>
            <img
                src={
                    require(`../../../assets/icons/${props.iconName}.svg`)
                        .default
                }
                alt="icons"
            />
        </div>
    );
}
