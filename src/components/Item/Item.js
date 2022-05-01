import React from 'react';
import './Item.css';
const Item = ({ item, clickHandler, buttonName }) => {
    const { _id, img, name, supplierName, description, quantity, price } = item;

    return (
        <div className='item m-5 mt-0'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Supplier Name: {supplierName}</h4>
            <h4>Price: ${price}</h4>
            <h4>Quantity: {quantity}</h4>
            <p title={description}>Description: {description.length > 100 ? description.slice(0, 101) + '...' : description}</p>
            <button onClick={() => clickHandler(_id)} className='end-button btn btn-secondary w-50'>{buttonName}</button>
        </div>
    );
};

export default Item;