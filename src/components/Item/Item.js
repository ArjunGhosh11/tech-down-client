import React from 'react';
import './Item.css';
const Item = ({ item, clickHandler, buttonName }) => {
    const { _id, img, name, supplierName, description, quantity, price } = item;

    return (
        <div className='item m-5 mt-0'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Supplier Name: {supplierName}</h5>
            <h5>Price: ${price}</h5>
            <h5>Quantity: {quantity}</h5>
            <p title={description}>Description: {description.length > 100 ? description.slice(0, 101) + '...' : description}</p>
            <button onClick={() => clickHandler(_id)} className='end-button btn btn-secondary w-50'>{buttonName}</button>
        </div>
    );
};

export default Item;