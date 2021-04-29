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
        <header className={classes.Picture} id="home">
            <div
                className={classes.TypingText}
                style={{
                    transform: `translateY(${scrollTop * -50}px)`,
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
            <div className={classes.FlyingContainer}>
                <i
                    className={`far fa-star fa-2x ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -30}px) rotate(${
                            scrollTop * 50
                        }deg)`,
                        left: 0,
                        color: '#72b7db',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-sm ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -60}px) rotate(${
                            scrollTop * 100
                        }deg)`,
                        left: '10vw',
                        color: '#123c52',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-2x ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -100}px) rotate(${
                            scrollTop * 10
                        }deg)`,
                        left: '30vw',
                        color: '#096796',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-2x ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -70}px) rotate(${
                            scrollTop * 100
                        }deg)`,
                        left: '21vw',
                        color: 'red',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-xs ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -25}px) rotate(${
                            scrollTop * 70
                        }deg)`,
                        right: '10vw',
                        color: '#0aa3f0',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-lg ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -45}px) rotate(${
                            scrollTop * 25
                        }deg)`,
                        right: '15vw',
                        color: '#0932d9',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-sm ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -5}px) rotate(${
                            scrollTop * 90
                        }deg)`,
                        right: '22vw',
                        color: '#0afa8a',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-xs ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -50}px) rotate(${
                            scrollTop * 120
                        }deg)`,
                        right: '24vw',
                        color: 'white',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-2x ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -60}px) rotate(${
                            scrollTop * 60
                        }deg)`,
                        right: '40vw',
                        color: '#ade7ff',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-lg ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -10}px) rotate(${
                            scrollTop * 10
                        }deg)`,
                        right: '50vw',
                        color: '#7700ff',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-3x ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -40}px) rotate(${
                            scrollTop * 35
                        }deg)`,
                        right: '55vw',
                        color: '#00ff5e',
                    }}
                ></i>
                <i
                    className={`far fa-star fa-3x ${classes.Star}`}
                    style={{
                        transform: `translateY(${scrollTop * -60}px) rotate(${
                            scrollTop * 60
                        }deg)`,
                        right: '0',
                        color: 'white',
                    }}
                ></i>
            </div>
        </header>
    );
}
