import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Blog.css';
import BlogDetails from './BlogDetails';
import blog1 from '../../images/blog-1.jpeg';
import blog2 from '../../images/blog-2.png';
import blog3 from '../../images/blog-3.png';
import blog4 from '../../images/blog-4.png';

const blogs = [
    {
        blogtitle: "10 Common Useful JavaScript String Hacks for Beginners",
        link: "https://touhidatik81.medium.com/10-common-useful-javascript-string-hacks-for-beginners-b79cdb3cc67",
        img: blog1
    },
    {
        blogtitle: "Some Important Things for JavaScript Es6 Block Binding and Function Hacks",
        link: "https://touhidatik81.medium.com/some-important-things-for-javascript-es6-block-binding-and-function-hacks-6ef643e705c5",
        img: blog2
    },
    {
        blogtitle: "Some Core Concepts That can take away all your Confusion about React JS",
        link: "https://touhidatik81.medium.com/some-core-concepts-that-can-take-away-all-your-confusion-about-react-js-352d6ba3e3e7",
        img: blog3
    },
    {
        blogtitle: "Common JavaScript Interview Question That You Need to Know",
        link: "https://touhidatik81.medium.com/common-javascript-interview-question-that-you-need-to-know-dbdad689d54c",
        img: blog4
    },
]

const Blog = () => {
    return (
        <section className="blog-area bg-area pt-0" id='blog'>
            <Container>
                <div className="title mb-5">
                    <h5 className='title-1'>My Blog</h5>
                    <h1> Latest Posts </h1>
                </div>

                <Row>
                    {
                        blogs.map(blog => <BlogDetails blog={blog} key={blog.link} />)
                    }
                </Row>
            </Container>

        </section>
    );
};

export default Blog;