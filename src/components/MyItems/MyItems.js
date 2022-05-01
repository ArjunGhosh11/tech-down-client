import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css';
import Loading from '../Loading/loading';
import ItemTable from '../ItemTable/ItemTable';
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
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded'>
            <h2 className='fw-bolder text-center my-5'><span className='text-secondary'>MY</span> ITEMS</h2>
            <ItemTable items={items} setItems={setItems}></ItemTable>

        </div>
    );
};

export default MyItems;