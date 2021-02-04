import React, {useState} from "react";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Picture from "../../components/Picture/Picture";
import Video from '../../components/Background/Background';
import AboutMe from '../../components/AboutMe/AboutMe';


// =========================
// Main scrolling background
// =========================

export default function Layout() {


    const [navColor, setNavColor] = useState(null);

    const pop = () => {
        if(window.scrollY > 927) {
            setNavColor('red');
        }
        else{
            setNavColor(null);
        }
    }

    window.addEventListener('scroll', () => pop());



    return (
        <div className={classes.Layout}>
            
            <Video/>
            <Navbar color={navColor}/>
            <Picture />
            <AboutMe/>
            <div className={classes.c}>tessdfsdfsfdst div</div>
        </div>
    );
}
