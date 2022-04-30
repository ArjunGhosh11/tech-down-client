import React from 'react';
import { toast } from 'react-toastify';
import useItems from '../../hooks/useItems';
import Item from '../Item/Item';
import './Manage.css';
const Manage = () => {
    const [items, setItems] = useItems();
    const handleItemDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            console.log('deleted Id:', id);
            const url = `http://localhost:5000/item/${id}`;
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
    // console.log(items);
    return (
        <div>
            <h2 className='fw-bolder text-center my-5'><span className='text-secondary'>Manage</span> Items</h2>

            <div className='items-section'>
                {
                    items.map(item => <Item
                        item={item}
                        clickHandler={handleItemDelete}
                        buttonName="Delete"
                    ></Item>)
                }
            </div>

        </div>
    );
};

export default Manage;