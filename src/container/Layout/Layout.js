import React from "react";
import classes from "./Layout.module.css";
import Typical from "react-typical";
import Logo from '../../components/Logo/Logo';

export default function Layout() {
    return (
        <div className={classes.Layout}>
            <nav>
                <Logo/>
            </nav>
            <div className={classes.Picture}>
                <div>
                    {/* <Typical
                        loop={Infinity}
                        wrapper="div"
                        steps={["Hello my name is Sergey and I am a Web Developer", 1000 , '']}
                    /> */}
                    

                </div>
                
            </div>
        </div>
    );
}
