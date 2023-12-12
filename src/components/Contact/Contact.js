import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCoffee, faEnvelope, faMapMarker, faMapMarkerAlt, faPeopleArrows, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)

        emailjs.sendForm('service_qwkvxn5', 'template_gy8nctn', e.target, 'user_yqPAC9LWc8gPQPGS6UIfR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    // const sendEmail = e => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_qwkvxn5', 'template_gy8nctn', e.target, 'user_yqPAC9LWc8gPQPGS6UIfR')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //         e.target.reset();
    // }

    return (
        <section className='bg-area pt-0' id='contact'>
            <Container>
                <div className="title mb-4">
                    <h5 className='title-1'>Contact Me</h5>
                    <h1>Get In Touch</h1>
                </div>

                <Row className='align-items-start'>
                    <Col md={7}>
                        <div className="contact-form">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input type="text" name='name' {...register("name", { required: true })} placeholder='Name' className='form-control my-4' />
                                {errors.name && <span className='text-danger'>required</span>}

                                <input type="email" name='email' {...register("email", { required: true })} placeholder='Email' className='form-control my-4' />
                                {errors.email && <span className='text-danger'>required</span>}

                                <input type="subject" name='subject' {...register("subject", { required: true })} placeholder='Subject' className='form-control my-4' />
                                {errors.subject && <span className='text-danger'>required</span>}

                                <textarea name='message' {...register("message", { required: true })} className='form-control my-4' placeholder='Your Message'></textarea>
                                {errors.message && <span className='text-danger d-block'>required</span>}

                                <input type='submit' className="btn main-btn mt-3 nain-btn-2" value='Send Message' />
                            </form>
                        </div>
                    </Col>
                    <Col md={5} className='mt-4'>
                        <div className="contact-content">

                            <div class="contact-box">
                                <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</h5>
                                <div class="content-box">
                                    <p>Tangail, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <div class="contact-box">
                                <h5><FontAwesomeIcon icon={faEnvelope} /> Email</h5>
                                <div class="content-box">
                                    <p>touhidatik81@gmail.com</p>
                                </div>
                            </div>
                            <div class="contact-box">
                                <h5><FontAwesomeIcon icon={faPhoneAlt} /> Mobile </h5>
                                <div class="content-box">
                                    <p>+8801723092381</p>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;