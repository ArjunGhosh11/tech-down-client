import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Item.css';
const Item = ({ item }) => {
    console.log(item);
    const navigate = useNavigate();
    const { _id, img, name, supplierName, description, quantity, price } = item;
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='item m-5 mt-0'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Supplier Name: {supplierName}</h4>
            <h4>Price: ${price}</h4>
            <h4>Quantity: {quantity}</h4>
            <p title={description}>Description: {description.length > 100 ? description.slice(0, 101) + '...' : description}</p>
            <button onClick={() => navigateToInventory(_id)} className='inventory-button btn btn-secondary'>Stock Update</button>
        </div>
    );
};

export default Item;