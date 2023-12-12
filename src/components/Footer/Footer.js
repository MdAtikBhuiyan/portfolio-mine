import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Navbars from '../Navbars/Navbars';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-area'>
            <a class="logo" href="#home">Md.Atik Bhuiyan</a>

            <ul class="list-unstyled text-center">
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
                <li><a href="https://twitter.com/AtikTouhid" target='_blank'>
                    <FontAwesomeIcon icon={faTwitter} />
                </a></li>
            </ul>

            <div class="copyright text-white">
                <p>All Right Reserved © 2024 <a className='text-white ml-1' href="#home"> @ Md Atik Bhuiyan</a></p>
            </div>

        </footer >
    );
};

export default Footer;