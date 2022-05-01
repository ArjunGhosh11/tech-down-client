import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ItemTable = ({ items, setItems }) => {
    const handleItemDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://mighty-spire-40970.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Item Deleted.')
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
        }
    }
    return (
        <div className='item-table container'>
            <Table striped bordered hover variant="dark" className=''>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Supplier Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr>
                            <td><div className='d-flex justify-contents-center align-items-center'><img style={{ height: '25px', width: '25px' }} className='rounded mx-2' src={item.img} alt="" />{item.name}</div></td>
                            <td>{item.supplierName}</td>
                            <td>$ {item.price}</td>
                            <td title={item.description}>{item.description.length > 100 ? item.description.slice(0, 101) + '...' : item.description}</td>
                            <td>{item.email}</td>
                            <td>{item.quantity}</td>
                            <td className='text-center'><button onClick={() => handleItemDelete(item._id)} className='text-white bg-dark'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ItemTable;