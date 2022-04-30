import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Inventory.css';
const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState();
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    console.log(item);
    const { _id, img, name, supplierName, description, quantity, price } = item;

    // const updateQuantity = (item, setItem) => {
    //     const { _id, img, name, supplierName, description, quantity, price } = item;
    //     const newQuantity = parseInt(quantity) - 1;
    //     console.log("new quantity:", newQuantity);
    //     const updatedItem = { _id, img, name, supplierName, description, newQuantity, price }
    //     setItem("updated item:", updatedItem);
    //     console.log(updatedItem);
    //     //send to the server
    //     const url = `http://localhost:5000/item/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedItem)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('Success:', data);
    //             toast('Item Delivered!');
    //         })

    // }
    return (
        <div className='inventory w-50 mx-auto d-flex flex-column align-items-center justify-contents-center shadow-lg p-3 my-5 bg-body rounded'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <h5>ID: {_id}</h5>
            <h4>Supplier Name: {supplierName}</h4>
            <h4>Price: ${price}</h4>
            <h4>Quantity: {quantity}</h4>
            <p title={description}>Description: {description}</p>
            {/* <button onClick={() => updateQuantity(item, setItem)} className='delivered-button btn btn-secondary w-100'>Delivered</button>  */}
        </div>
    );
};

export default Inventory;