import React from 'react';

const loading = () => {
    return (
        <div className="d-flex justify-content-center m-5 w-40" >
            <div style={{ width: '200px', height: '200px' }} className="spinner-border m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default loading;