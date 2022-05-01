import React from 'react';
import useItems from '../../hooks/useItems';
import './Manage.css';
import Loading from '../Loading/loading';
import ItemTable from '../ItemTable/ItemTable';
const Manage = () => {
    const [items, setItems] = useItems();
    if (!items) {
        return <Loading></Loading>
    }
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded'>
            <h2 className='fw-bolder text-center my-5'><span className='text-secondary'>MANAGE</span> ITEMS</h2>
            <ItemTable items={items} setItems={setItems}></ItemTable>
        </div>
    );
};

export default Manage;