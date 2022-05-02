import React from 'react';
const Blog = () => {
    return (
        <div className='container shadow-lg p-3 my-5 bg-body rounded'>
            <h2 className='text-secondary text-center'>BLOGS</h2>
            <div className='p-5'>
                <h5>1.Difference between javascript and node.js.</h5>
                <p>= Javascript is programming language used to write scripts in the website whereas node js is a javascript runtime environment. Javascript is used in client side whereas nodeJs is used in the server-side.</p>
                <h5>2.When should we use node.js and when should we use mongodb?</h5>
                <p>= Node js is used for back-end API services for event-driven servers whereas mongodb is a database used to store the data for the website.</p>
                <h5>3.Differences between sql and nosql databases?</h5>
                <p>= SQL database is vertically scalable whereas NOSQL is horizontally scalable. SQL is suited for complex queries whereas NOSQL database is not good for complex queries.</p>
            </div>
        </div>
    );
};

export default Blog;