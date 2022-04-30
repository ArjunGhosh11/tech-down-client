import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css';
import Loading from '../Loading/loading';
import { toast } from 'react-toastify';
import Item from '../Item/Item';
const MyItems = () => {
    const [items, setItems] = useState();
    const [user] = useAuthState(auth);
    const url = `http://localhost:5000/item?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    if (!items) {
        return <Loading></Loading>
    }
    console.log(items);
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
    return (
        <div>
            <h2 className='fw-bolder text-center my-5'><span className='text-secondary'>My</span> Items</h2>

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

export default MyItems;