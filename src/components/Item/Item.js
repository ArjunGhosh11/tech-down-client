import React from 'react';
import { Navigate } from 'react-router-dom';
import './Item.css';
const Item = ({ item }) => {
    console.log(item);
    const { img, name, supplierName, description, quantity, price } = item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Supplier Name: {supplierName}</h4>
            <h4>Price: ${price}</h4>
            <h4>Quantity: {quantity}</h4>
            <p>Description: {description}</p>
            <button cl onClick={() => Navigate('/inventory')} className='inventory-button btn btn-secondary'>Proceed To Checkout</button>
        </div>
    );
};

export default Item;