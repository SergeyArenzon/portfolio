import React, { useState, useEffect } from 'react';
import classes from './Layout.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Picture from '../../components/Picture/Picture';
import AboutMe from '../../components/AboutMe/AboutMe';
import Contacts from '../../components/Contacts/Contacts';
import Projects from '../Projects/Projects';
import Background from '../../components/Background/Background';
// =========================
// Main scrolling background
// =========================

export default function Layout() {
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        console.log('useEffect');
        return () => window.removeEventListener('scroll', onScroll);
        // eslint-disable-next-line
    }, []);

    const [navColor, setNavColor] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    //  Gets the scrolled position for the navbar
    const progressBarHandler = () => {
        const winScroll = document.documentElement.scrollTop; // scrolled vertically by px
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    };

    
    const onScroll = () => {
        // progressbar handler
        progressBarHandler();

        if (window.scrollY > 50) {
            setNavColor(true);
            return;
        }
        setNavColor(null);
    };

   
    
    return (
        <div className={classes.Layout}>
            <Background />
            <Navbar color={navColor} scrollTop={scrollTop} />
            <Picture  scrollTop={scrollTop} />
            <AboutMe />
            <Projects />
            <Contacts />
            
        </div>
    );
}
