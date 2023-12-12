import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Navbars from '../Navbars/Navbars';
import TypewriterComponent from 'typewriter-effect';


const Header = () => {
    return (

        <header id='home'>


            {/* <Navbars></Navbars> */}

            <div className="overlay"> </div>

            <Container>

                <div className="header-content">
                    <h4>Hi, There <span className="wave">👋🏻</span> </h4>
                    <h1>I'm Md. Atik Bhuiyan</h1>
                    <h3>I am a <TypewriterComponent options={{
                            strings: ['Web Developer', 'React Developer', 'Programmer'],
                            autoStart: true, loop: true
                        }} />
                    </h3>
                    <a class="button" href="#about" title="">More About Me <FontAwesomeIcon icon={faChevronDown} className='down-icon' /> </a>

                    <ul class="header-social list-unstyled text-center">
                        <li><a href="https://www.facebook.com/touhid.atik.315428" target='_blank'>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/md-atik-bhuiyan/" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a></li>
                        <li><a href="https://github.com/MdAtikBhuiyan" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a></li>
                        <li><a href="https://www.instagram.com/touhidatik/" target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a></li>
                        {/* <li><a href="https://twitter.com/AtikTouhid" target='_blank'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a></li> */}
                    </ul>
                </div>
            </Container>


        </header>

    );
};

export default Header;