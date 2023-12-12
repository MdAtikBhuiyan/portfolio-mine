import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Skill.css';
import ProgressBar from 'react-animated-progress-bar';
import SkillDetail from './SkillDetail';

const expertise = [
    {title: 'React', percent: 90},
    {title: 'Javascript', percent: 80},
    {title: 'ES6', percent: 85},
    {title: 'Tailwind CSS', percent: 90},
    {title: 'Bootstarp4', percent: 90},
    {title: 'CSS3', percent: 90},
    {title: 'HTML5', percent: 90}
]
const comfortable =[
    {title:'jQuery', percent:80},
    {title:'Node JS', percent:75},
    {title:'Express JS', percent:80},
    {title:'Mongo DB', percent:85},
    {title:'SASS', percent:75},
    {title:'Firebase', percent:70},
    {title:'Material UI', percent:78},
]

const familiar = [
    {title:'C/C++', percent:90},
    {title:'Python', percent:75},
    {title:'MySQL', percent:70},
    {title:'Redux', percent:65},
    {title:'React Native', percent:60},
]
const tools=[
    {title:'Git', percent:90},
    {title:'VS Code', percent:95},
    {title:'Chorome Dev Tools', percent:80},
    {title:'Netlify', percent:80},
    {title:'Vercel', percent:80},
    {title:'Adobe Photoshop & Illustrator', percent:70},
    {title:'Adobe XD', percent:65},
    {title:'Figma', percent:70},
]

const Skill = () => {
    return (
        <section className="skill-area bg-area pt-0" id='skill'>
            <Container>
                <div className="title mb-4">
                    <h5 className='title-1'>My Skill</h5>
                    <h1>What Can I Do</h1>
                </div>
                <Row>
                    <SkillDetail skillTitle={'Expertise'} skillItems={expertise} />
                    <SkillDetail skillTitle={'Comfortable'} skillItems={comfortable} />
                    <SkillDetail skillTitle={'Familiar'} skillItems={familiar} />
                    <SkillDetail skillTitle={'Tools & Software'} skillItems={tools} />
                </Row>
            </Container>
        </section>
    );
};

export default Skill;