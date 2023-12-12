import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import img from '../../images/me.png';
import mine from '../../images/mine-new.jpg'
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faChevronDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'


const About = () => {
    return (
        <section className='about-area bg-area' id='about'>

            <Container>
                <Row className='justify-content-center align-items-center' >
                    <Col md={6}>
                        <img src={mine} className='img-fluid mb-5 mine-img' alt="" />
                    </Col>
                    <Col md={6}>
                        <div className="title mb-5">
                            <h5 className='title-1'>About Me</h5>
                            <h1>Who Am I</h1>
                        </div>
                        <div className="about-text">
                            <p className='text-justify'>I'm a self-taught developer. My specialty lies within MERN Stack development. I have also the knowledge of development cycle as well as good command over other programming language. I'm also well experienced with teamwork and problem solving. I am always ready to learn any technology or language.</p>
                            <Table className='table-borderless'>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>:  <span className='ml-3'>Md. Atik Bhuiyan</span></td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>:  <span className='ml-3'> tangail, Dhaka, Bangladesh</span></td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>:  <span className='ml-3'>+8801723092381</span></td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>:  <span className='ml-3'>touhidatik81@gmail.com</span></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <a className='main-btn main-btn-2 mt-3' href="https://drive.google.com/uc?export=download&id=1YTTnm_qAVKAo484xG0qMGPpEauXWLhXc" target='_blank'>
                                Dowload Resume <FontAwesomeIcon icon={faArrowDown} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;