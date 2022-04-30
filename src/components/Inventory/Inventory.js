import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';
import './Inventory.css';
const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState();
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])
    console.log(item);
    // const [item, setItem] = useItemDetails(id);
    // const { name } = item;
    const { _id, img, name, supplierName, description, quantity, price } = item;
    return (
        <div className='inventory w-50 mx-auto d-flex flex-column align-items-center justify-contents-center shadow-lg p-3 my-5 bg-body rounded'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <h5>ID: {_id}</h5>
            <h4>Supplier Name: {supplierName}</h4>
            <h4>Price: ${price}</h4>
            <h4>Quantity: {quantity}</h4>
            <p title={description}>Description: {description}</p>
            <button className='delivered-button btn btn-secondary w-100'>Delivered</button>
        </div>
    );
};

export default Inventory;