import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo-2.png';
const Footer = () => {
    return (
        <div className='py-5 bg-secondary px-5'>
            <div className='d-flex justify-content-between '>
                <div className="footer-items d-flex flex-column">
                    <img src={logo} alt="" />
                    <h5 className='fw-bolder'><span className='text-white'>Tech</span>Down</h5>
                </div>
                <div className="footer-items ">
                    <p className='fw-bolder'>CONTACT US</p>
                    <p><small>Phone: 01711111111</small></p>
                    <p><small>Email: techdown@gmail.com</small></p>
                    <p><small>Address: House-10, Sector-C, Dhanmondi, Dhaka</small></p>
                </div>
            </div>
            <div className="footer-items text-center">
                <p>Copyright<FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></p>
            </div>
        </div>
    );
};

export default Footer;