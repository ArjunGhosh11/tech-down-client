import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='container shadow-lg p-3 my-5 bg-body rounded'>
            <h2 className='text-secondary text-center'>BLOGS</h2>
            <div className='p-5'>
                <h5>1.Difference between javascript and node.js.</h5>
                <p>= </p>
                <h5>2.When should we use node.js and when should we use mongodb?</h5>
                <p>= </p>
                <h5>3.Differences between sql and nosql databases?</h5>
                <p>= </p>
                <h5>4.What is the purpose of jwt and how does it work?</h5>
                <p>= </p>

            </div>
        </div>
    );
};

export default Blog;