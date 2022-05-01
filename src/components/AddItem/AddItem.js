import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css';
const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const supplierName = event.target.supplierName.value;
        const quantity = parseInt(event.target.quantity.value);
        const description = event.target.description.value;
        const sold = parseInt(event.target.sold.value);
        const price = parseInt(event.target.price.value);
        const item = { name, email, img, supplierName, quantity, description, sold, price };

        // SEND DATA to server
        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                toast('User Added successfully');
                event.target.reset();
            })
    }
    return (
        <div className='w-50 mx-auto p-5 shadow-lg p-3 my-5 bg-body rounded'>
            <h2 className=' fw-bolder text-center'>PLEASE ADD A <span className='text-secondary'>NEW ITEM</span></h2>
            <form className='p-3 pt-0 ' onSubmit={handleAddItem}>
                <input className='w-100 border border-3 text-center  rounded-pill p-2 mb-3' type="text" name='name' placeholder='Product Name' required />
                <br />
                <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="email" name='email' placeholder='Email' value={user.email} required readOnly />
                <br />
                <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="text" name='img' placeholder='Image URL' required />
                <br />
                <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="text" name='description' placeholder='Description' required />
                <br />
                <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="text" name='supplierName' placeholder='Supplier Name' required />
                <br />
                <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="number" name='quantity' placeholder='Quantity' required />
                <br />

                <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="number" name='sold' placeholder='Sold' required />
                <br />
                <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="number" name='price' placeholder='Price' required />
                <br />
                <input className='w-100 border border-3 text-center  rounded-pill p-2 mb-3 bg-secondary fw-bolder' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;