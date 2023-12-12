import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { HashLink } from 'react-router-hash-link'

const Navbars = () => {

  

    return (
        <Navbar expand="lg" sticky='top' id='mynav'>
            <Container>
                <Navbar.Brand href="#home">MD Atik Bhuiyan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='bars'> <FontAwesomeIcon icon={faBars} /> </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <HashLink smooth className='nav-link' to="#home">
                            Home
                        </HashLink>
                        <HashLink smooth className='nav-link' to="#skill">
                            Skill
                        </HashLink>
                        <HashLink smooth className='nav-link' to="#projects">
                            Projects
                        </HashLink>
                        <HashLink smooth className='nav-link' to="#blog">
                            Blog
                        </HashLink>
                        <HashLink smooth className='nav-link' to="#contact">
                            Contact
                        </HashLink>

                        <Nav.Link className='main-btn ml-5' href="https://drive.google.com/uc?export=download&id=1YTTnm_qAVKAo484xG0qMGPpEauXWLhXc" download>
                            Resume
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navbars;