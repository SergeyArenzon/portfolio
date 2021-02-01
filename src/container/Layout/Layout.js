import React, { useEffect, useState } from "react";
import classes from "./Layout.module.css";
import Typewriter from "typewriter-effect";
import Navbar from '../../components/Navbar/Navbar';
import Picture from '../../components/Picture/Picture';

// =========================
// Main scrolling background
// =========================


export default function Layout() {
    // const [showText, setShowText] = useState(false);


    // //  Delaying the seconde typing effect
    // useEffect(() => {
    //     setTimeout(function () {
    //         setShowText(true);
    //     }, 2000);
    // }, []);

    // //  ======================
    // //  Typing effect controls
    // //  ======================


    // // Delayed typing effect
    // let text = null;
    // if (showText) {
    //     text = (
    //         <div className={classes.TypeSec}>
    //             <Typewriter
    //                 className={classes.TypeSec}
    //                 options={{
    //                     strings: [
    //                         "FULLSTACK Developer.",
    //                         "FRONTEND Developer.",
    //                         "BACKEND Developer.",
    //                     ],
    //                     autoStart: true,
    //                     loop: true,
    //                     delay: 20,
    //                 }}
    //             />
    //         </div>
    //     );
    // }


    // // First kicked typing effect
    // const staticText = (
    //     <Typewriter
    //         options={{
    //             strings: ["Hi my name is Sergey Arenzon and I'm a"],
    //             autoStart: true,
    //             loop: false,
    //             pauseFor: 1000000000000000000,
    //             delay: 40,
    //         }}
    //     />
    // );



    return (
        <div className={classes.Layout}>
            <Navbar/>
            <Picture/>
        </div>
    );
}
