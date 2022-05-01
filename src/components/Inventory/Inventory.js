import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Inventory.css';
import Loading from '../Loading/loading';
const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState();
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    if (!item) {
        return <Loading></Loading>
    }
    const { _id, img, name, supplierName, description, quantity, price, sold } = item;

    const sendToServer = (item, _id, toastMessage) => {
        const url = `http://localhost:5000/item/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {

                if (toastMessage !== '') {
                    toast(`${toastMessage}`);
                }
            })
    }
    sendToServer(item, _id, "");
    const reduceQuantity = (item, setItem) => {
        const { _id, img, name, supplierName, description, quantity, price } = item;
        const newQuantity = parseInt(quantity) - 1;
        const updatedItem = { _id, img, name, supplierName, description, 'quantity': newQuantity, price }
        setItem(updatedItem);
        //send to the server
        sendToServer(item, _id, "Item Delivered!");


    }
    sendToServer(item, _id, "");
    const handleAddQuantity = (event, item, setItem) => {

        event.preventDefault();
        const addQuantity = event.target.quantity.value;
        const { _id, img, name, supplierName, description, quantity, price, sold } = item;
        const newQuantity = parseInt(quantity) + parseInt(addQuantity);
        const updatedItem = { _id, img, name, supplierName, description, 'quantity': newQuantity, price, sold }
        setItem(updatedItem);
        //Send to server
        sendToServer(item, _id, "Item/items received!");
    }
    return (
        <div className='inventory w-50 mx-auto d-flex flex-column align-items-center justify-contents-center shadow-lg p-3 my-5 bg-body rounded'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <h5>ID: {_id}</h5>
            <h4>Supplier Name: {supplierName}</h4>
            <h4>Price: ${price}</h4>
            <h4>Quantity: {quantity}</h4>
            <h4>Sold: {sold}</h4>
            <p title={description}>Description: {description}</p>
            <button onClick={() => reduceQuantity(item, setItem)} className='delivered-button mb-3 rounded-pill fw-bolder btn btn-secondary w-100'>Delivered</button>
            <form className='w-100' onSubmit={(event) => handleAddQuantity(event, item, setItem)}>
                <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="number" name='quantity' placeholder='Quantity' required />
                <br />
                <input className='w-100 border border-3 text-center  rounded-pill p-2 mb-3 bg-secondary fw-bolder' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default Inventory;