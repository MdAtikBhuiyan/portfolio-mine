import React from 'react';
import { Col } from 'react-bootstrap';
import ProgressBar from 'react-animated-progress-bar';

const SkillDetail = ({ skillTitle, skillItems }) => {
    return (
        <Col md={6}>
             <h3 className='my-5 skill-title'>{skillTitle}</h3>
            <div className="skill-details text-white">
               
                {
                    skillItems.map((skill,index) => <li className='list-unstyled'>
                        <h6> {skill.title} </h6>
                        <ProgressBar
                            
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage={skill.percent}
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                        />
                    </li>)
                }
            </div>
        </Col>
    );
};

export default SkillDetail;