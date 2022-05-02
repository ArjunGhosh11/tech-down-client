import React from 'react';
import error from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div className='container flex-column d-flex align-items-center justify-contents-center'>
            <h2 className='text-center fw-bolder text-secondary'>PAGE NOT FOUND</h2>
            <img className='img-fluid' src={error} alt="" />
        </div>
    );
};

export default NotFound;