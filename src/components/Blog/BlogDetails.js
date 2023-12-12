import React from 'react';
import { Col } from 'react-bootstrap';

const BlogDetails = ({ blog }) => {

    const { blogtitle, img, link } = blog

    return (
        <Col lg={4} md={6} sm={6}>
            <div className="blog-details rounded">
                <img src={img} alt="" className='img-fluid' />

                <div className="blog-content">
                    <h5>{blogtitle}</h5>
                    <a className='main-btn mt-4' href={link} target='_blank'> Read More </a>
                </div>
            </div>


        </Col>
    );
};

export default BlogDetails;