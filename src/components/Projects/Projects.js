import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Project.css';
import ProjectDetails from './ProjectDetails';

// import img from '../../images/project.jpg';
// import img1 from '../../images/project-2.jpg';
// import img2 from '../../images/project-3.jpg';

import p1 from '../../images/img/p-1.png';
import p2 from '../../images/img/p-2.png';
import p3 from '../../images/img/p-3.png';
import p4 from '../../images/project-1.4.png';
import p5 from '../../images/project-1.5.png';
import p6 from '../../images/project-1.6.png';
import p7 from '../../images/project-1.7.png';
import p8 from '../../images/project-1.8.png';
import pp1 from '../../images/p-2.png';
import pp2 from '../../images/project-2.2.png';
import pp3 from '../../images/project-2.3.png';
import pp4 from '../../images/project-2.4.png';
import pp5 from '../../images/project-2.5.png';
import ppp1 from '../../images/p-3.png';
import ppp2 from '../../images/project-3.1.png';
import ppp3 from '../../images/project-3.2.png';
import pppp1 from '../../images/p-4.png';
import pppp2 from '../../images/project-4.1.png';


const projects = [
    {
        title: 'Pet Adoption',
        site: 'https://asn-pet-adoption-12.web.app/',
        code: 'https://github.com/MdAtikBhuiyan/petAdoption-client',
        description: 'This is a pet adoption based website. here user can post their pet for adopt and also post their campaign and user can donate also. here is a admin dashboard user can see all details about pet, campaign and everything.',
        titleImg: p1,
        images: [p1],
        techology: ['JavaScript', 'React', 'tailwind css', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Authentication']
    },
    {
        title: "Enlightened Knowledge",
        site: 'https://asn-library-management-11.web.app/',
        code: 'https://github.com/MdAtikBhuiyan/Enlightened-Knowledge-Client',
        description: 'This is a library management website with dashboard. Where people can click borrow book to read the book. A user can see his all taken book list and also can give remove from his dashboard. and admin can add any book, manage any services in home page and also can see other details',
        titleImg: p2,
        images: [p2],
        techology: ['JavaScript', 'React', 'tailwind css', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Authentication']
    },
    {
        title: "Flavour Burst",
        site: 'https://asn-flavour-burst-10.web.app/',
        code: 'https://github.com/MdAtikBhuiyan/Flavour-Burst-Client',
        description: 'This is a food brand-based website. It will show some food categories and show category-based food. A user can cart this food and manage their cart foods.',
        titleImg: p3,
        images: [p3],
        techology: ['JavaScript', 'React', 'tailwind css', 'Firebase Authentication', 'Node.js', 'Express.js', 'MongoDB']
    },
    // {
    //     title: "Bhuiyan's Champoins League",
    //     site: 'https://zealous-mcnulty-a6d7c4.netlify.app/',
    //     code: 'https://github.com/MdAtikBhuiyan/Bhuiyan-s-Champions-League',
    //     description: 'This is a football Leaugue based website.Here many teams will be playing. and details of each team is available in this website. you can explore this website to see any details about every teams.',
    //     titleImg: pppp1,
    //     images: [pppp1, pppp2],
    //     techology: ['JavaScript', 'React', 'Bootstrap']
    // },

]

const Projects = () => {
    return (

        // <section className="project-area bg-area pt-0" id='projects'>
        //     <Container>
        //         <div className="title mb-4">
        //             <h5 className='title-1'>My Portfolio</h5>
        //             <h1>My Recent Works</h1>
        //         </div>
        //         <Row>
        //            {
        //                projects.map(project => <ProjectDetails project={project} key={project.title} />)
        //            }
        //         </Row>
        //     </Container>
        // </section>

        <section className="project-area bg-area pt-0" id='projects'>
            <Container>
                <div className="title mb-4">
                    <h5 className='title-1'>My Portfolio</h5>
                    <h1>My Recent Works</h1>
                </div>
                <Row className='pt-5'>
                    {
                        projects.map(project => <ProjectDetails project={project} key={project.title} />)
                    }
                </Row>
            </Container>
        </section>

    );
};

export default Projects;