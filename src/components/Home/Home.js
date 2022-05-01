import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <div className='container shadow-lg p-3 my-5 bg-body rounded'>
                <h2 className='text-center fw-bolder my-3'>ADD <span className='text-secondary'>SUPPLIER</span></h2>
                <form className='w-50 mx-auto'>
                    <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="text" name='supplierName' placeholder='Supplier Name' required />
                    <br />
                    <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="email" name='email' placeholder='Email' required />
                    <br />
                    <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="number" name='phone' placeholder='Phone Number' required />
                    <br />
                </form>
            </div>
        </div>
    );
};

export default Home;