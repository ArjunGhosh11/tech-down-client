import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import './Home.css';
import Loading from '../Loading/loading';
import { Table } from 'react-bootstrap';
const Home = () => {
    const [suppliers, setSuppliers] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/supplier')
            .then(res => res.json())
            .then(data => setSuppliers(data))
    }, []);
    console.log(suppliers);
    if (!suppliers) {
        return <Loading></Loading>
    }
    const handleAddSupplier = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const supplierName = event.target.supplierName.value;
        const phone = event.target.phone.value;
        const supplier = { email, supplierName, phone };
        console.log(supplier);

        //SEND DATA to server
        fetch('http://localhost:5000/supplier', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(supplier)
        })
            .then(res => res.json())
            .then(data => {
                toast('Supplier Added successfully');
                event.target.reset();
            })
    }
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <div className='item-table container shadow-lg p-3 my-5 bg-body rounded'>
                <h2 className='text-secondary fw-bolder text-center'>SUPPLIERS</h2>
                <Table striped bordered hover variant="dark" className=''>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            suppliers.map(supplier => <tr>
                                <td>{supplier._id}</td>
                                <td>{supplier.supplierName}</td>
                                <td>{supplier.email}</td>
                                <td>{supplier.phone}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
            <div className='container shadow-lg p-3 my-5 bg-body rounded'>
                <h2 className='text-center fw-bolder my-3'>ADD <span className='text-secondary'>SUPPLIER</span></h2>
                <form onSubmit={handleAddSupplier} className='w-50 mx-auto'>
                    <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="text" name='supplierName' placeholder='Supplier Name' required />
                    <br />
                    <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="email" name='email' placeholder='Email' required />
                    <br />
                    <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="number" name='phone' placeholder='Phone Number' required />
                    <br />
                    <input className='w-100 border border-3 text-center  rounded-pill p-2 mb-3 bg-secondary fw-bolder' type="submit" value="Add Supplier" />
                </form>
            </div>

        </div>
    );
};

export default Home;