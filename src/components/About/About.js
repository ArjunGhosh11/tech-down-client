import React from 'react';
import logo from '../../images/logo-2.png';

const About = () => {
    return (
        <div className='text-center container shadow-lg p-3 my-5 bg-body rounded d-flex flex-column align-items-center'>
            <h2 className='text-center'><span className='text-secondary'>ABOUT</span> US</h2>
            <div style={{ height: "200px", width: "200px" }} className=" d-flex p-4 flex-column align-items-center bg-secondary rounded-circle">
                <img src={logo} alt="" />
                <h5 className='fw-bolder'><span className='text-white'>Tech</span>Down</h5>
            </div>
            <h4><strong>Email: </strong>techdown@gmail.com</h4>
            <h4><strong>Phone: </strong>01711111111</h4>
            <h4><strong>Address: </strong>House-10, Sector-C, Dhanmondi, Dhaka</h4>
        </div>
    );
};

export default About;