import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import classes from './Picture.module.css';
import Waves from '../Waves/Waves';

export default function Picture({ scrollTop }) {
    const [showText, setShowText] = useState(false);

    //  Delaying the seconde typing effect
    useEffect(() => {
        setTimeout(function () {
            setShowText(true);
        }, 2000);
    }, []);

    //  ======================
    //  Typing effect controls
    //  ======================

    // Delayed typing effect
    let text = null;
    if (showText) {
        text = (
            <div className={classes.TypeSec}>
                <Typewriter
                    className={classes.TypeSec}
                    options={{
                        strings: [
                            'FULLSTACK Developer.',
                            'FRONTEND Developer.',
                            'BACKEND Developer.',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 20,
                    }}
                />
            </div>
        );
    }

    // First kicked typing effect
    const staticText = (
        <Typewriter
            options={{
                strings: ["My name is Sergey Arenzon and I'm a"],
                autoStart: true,
                loop: false,
                pauseFor: 1000000000000000000,
                delay: 40,
            }}
        />
    );
    return (
        <header className={classes.Picture}>
            <div
                className={classes.TypingText}
                style={{
                    transform: `translateY(${scrollTop * -30}px)`,
                }}
            >
                <div className={classes.Circles}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>Hi</h1>
                {staticText}
                {text}
                <div className={classes.Circles}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Waves />
        </header>
    );
}
