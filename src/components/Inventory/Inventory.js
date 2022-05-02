import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Loading/loading';
const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState();
    useEffect(() => {
        const url = `https://mighty-spire-40970.herokuapp.com/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    const navigate = useNavigate();
    const navigateToManage = () => {
        navigate("/manageitems");
    }
    if (!item) {
        return <Loading></Loading>
    }
    const { _id, img, name, supplierName, description, quantity, price, sold } = item;

    const sendToServer = (item, _id, toastMessage) => {
        const url = `https://mighty-spire-40970.herokuapp.com/item/${_id}`;
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
    const reduceQuantity = (item, setItem) => {
        const { _id, img, name, supplierName, description, quantity, price } = item;
        const newQuantity = parseInt(quantity) - 1;
        const updatedItem = { _id, img, name, supplierName, description, 'quantity': newQuantity, price, sold }
        setItem(updatedItem);
        //send to the server
        sendToServer(item, _id, "Item Delivered!");
    }
    const handleAddQuantity = (event, item, setItem) => {
        event.preventDefault();
        const addQuantity = event.target.quantity.value;
        const { _id, img, name, supplierName, description, quantity, price, sold } = item;
        const newQuantity = parseInt(quantity) + parseInt(addQuantity);
        const updatedItem = { _id, img, name, supplierName, description, 'quantity': newQuantity, price, sold }
        setItem(updatedItem);
        //Send to server
        sendToServer(item, _id, "Item/items received!");
        event.target.reset();
    }
    sendToServer(item, _id, "");
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

            <div className='container mt-3'>
                <h2 className='fw-bolder text-center'><span className='text-secondary'>RESTOCK</span> ITEM</h2>
                <form className='w-100' onSubmit={(event) => handleAddQuantity(event, item, setItem)}>
                    <input className='w-100 border border-3 text-center rounded-pill p-2 mb-3' type="number" name='quantity' placeholder='Quantity' required />
                    <br />
                    <input className='w-100 border border-3 text-center text-white rounded-pill p-2 mb-3 bg-secondary fw-bolder' type="submit" value="Add Units" />
                </form>
            </div>

            <div className='w-50 mx-auto my-5'><button onClick={navigateToManage} className='btn btn-secondary rounded-pill p-3 w-100'>MANAGE ITEMS</button></div>
        </div>
    );
};

export default Inventory;