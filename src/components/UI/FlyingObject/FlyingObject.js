import classes from './FlyingObject.module.css';
import React from 'react';

export default function FlyingObject({ scrollTop, fill, width, name }) {
    return (
        <div className={classes.FlyingObject}>
            <svg
                className={classes.First}
                preserveaspectration="none"
                viewBox="0,0,50,50"
                // transform="scale(100px, 100px)"
                style={{
                    transform: `translateY(${scrollTop * -30}px)`,
                }}
            >
                <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
            </svg>

            <svg
                className={classes.Second}
                viewBox="0,0,300,300"
                preserveaspectration="none"
                style={{
                    transform: `translateY(${scrollTop * -30}px)`,
                }}
            >
                <polygon
                    points=" 0 0, 30 0, 90 60, 150 0, 180 0, 180 30, 120 90, 180 150, 180 180, 150 180, 90 120, 30 180, 0 180, 0, 150, 60 90, 0 30"
                    fill="#FFF"
                ></polygon>
            </svg>

            <svg
                className={classes.Third}
                preserveaspectration="none"
                viewBox="0,0,50,50"
                style={{
                    transform: `translateY(${scrollTop * -30}px)`,
                }}
            >
                <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
            </svg>
        </div>
    );
}
