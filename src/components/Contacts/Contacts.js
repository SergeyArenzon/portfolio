import React from 'react';
import classes from './Contacts.module.css';
import arrow from './arrow.svg';
import contacts_svg from './contacts.svg';
// import ContactsForm from '../ContactForm/ContactForm';

export default React.memo(function Contacts() {
    return (
        <div className={classes.Contacts} id="contact">
            <svg
                className={classes.Seperator}
                width="100%"
                height="120"
                viewBox="0.1 0.1 180 40"
                preserveAspectRatio="none"
            >
                <g transform="translate(-18.298844,-77.973964)">
                    <path
                        className={classes.Line}
                        d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z"
                    />
                    <path
                        style={{ fill: 'rgb(44, 44, 44)' }}
                        d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z"
                    />
                </g>
            </svg>
            <div className={classes.Body}>
                <div className={classes.Wrapper}>
                    <h1 className={classes.ContactsTitle}>Contacts</h1>
                    <img
                        className={classes.Arrows}
                        src={arrow}
                        alt="arrow"
                    ></img>
                </div>
                <div className={classes.ContactsContainer}>
                    <div>
                        <i
                            className={`fas fa-envelope-square fa-2x ${classes.Icons}`}
                        ></i>
                        <a
                            href={'mailto:arenzonsergey@gmail.com'}
                            target="_blank"
                            rel="noreferrer"
                        >
                            arenzonsergey@gmail.com
                        </a>
                    </div>
                    <div>
                        <i
                            className={`fab fa-github-square fa-2x ${classes.Icons}`}
                        ></i>
                        <a
                            href={'https://github.com/SergeyArenzon'}
                            target="_blank"
                            rel="noreferrer"
                        >
                            www.github.com/SergeyArenzon
                        </a>
                    </div>
                    <div>
                        <i
                            className={`fab fa-linkedin fa-2x ${classes.Icons}`}
                        ></i>
                        <a
                            href={'https://www.linkedin.com/in/sergeyarenzon'}
                            target="_blank"
                            rel="noreferrer"
                        >
                            www.linkedin.com/in/sergeyarenzon
                        </a>
                    </div>
                    <div>
                        <i
                            className={`fas fa-phone-square fa-2x ${classes.Icons}`}
                        ></i>

                        <a href="tel:0544537060">0544537060</a>
                    </div>
                </div>
                <div className={`${classes.Wrapper} ${classes.Sec}`}>
                    <div className={classes.ContactsSvg}>
                        <img src={contacts_svg} alt="contacts"></img>
                    </div>
                    {/* <ContactsForm/> */}
                </div>
                
            </div>
        </div>
    );
});
