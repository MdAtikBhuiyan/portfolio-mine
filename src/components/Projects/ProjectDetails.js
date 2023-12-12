import React, { useState } from 'react';
import { Card, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faChevronDown, faCoffee, faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    responsiveClass: true,
    autoplay: true,
    loop: true,
    dots: true,
    smartSpeed: 1000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    margin: 20,
    dotsSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        750: {
            items: 1,
        }
    },
};

const ProjectDetails = ({ project }) => {

    const { title, site, code, description, titleImg, images, techology } = project;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col lg={4} md={6} sm={6} className='mb-5 px-4'>
                <div className="projet-container">
                    <div className="project-img">
                        <img src={titleImg} alt="" className='title-img' />
                    </div>
                    <div className="show-details">
                        <button onClick={handleShow} className="btn show-btn btn-dark">View Details</button>
                    </div>
                    <div className='link-btn'>
                        <a href={site} target='_blank' className="btn btn-dark mr-4">
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                        <a href={code} target='_blank' className="btn btn-dark">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </Col>

            {/* Modal */}

            <Modal
                // {...props}
                show={show}
                onHide={handleClose}
                size="lg"

            >

                <Modal.Body>
                    <button onClick={handleClose} className="btn btn-danger close-btn">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <br/>
                    {/* <OwlCarousel items={3}
                        className="owl-theme" {...options}
                    >
                        {
                            images?.map(img =>
                                <div><img src={img} className='title-img' /></div>
                            )
                        }
                    </OwlCarousel> */}

                    <h3>{title}</h3>
                    <p>
                        {description}
                    </p>

                    <p><span className='tech'>Technology Used: </span>
                        {
                            techology.map(tech =>
                                <li>
                                    {tech}
                                </li>)
                        }
                    </p>

                    <div className='modal-link mt-4'>
                        <a href={site} target='_blank' className="main-btn mr-4">
                            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Link
                        </a>
                        <a href={code} target='_blank' className="main-btn">
                            <FontAwesomeIcon icon={faGithub} /> Source Code
                        </a>
                    </div>

                </Modal.Body>
            </Modal>

        </>
    );
};

export default ProjectDetails;



{/* <Col lg={6} md={12}>
<div className="project-details rounded">
    <img src={img} alt="" className='img-fluid' />

    <div className="project-content">
        <h4>{title}</h4>
        <p> {description} </p>

        <div className="project-link d-flex md-justify-content-between mb-2">
            <a className='main-btn' href={site} target='_blank'> Live Site </a>
            <a className='main-btn' href={code} target='_blank'> View Code </a>
        </div>
    </div>
</div>


</Col> */}