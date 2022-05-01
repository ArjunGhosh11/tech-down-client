import React from 'react';
import useItems from '../../hooks/useItems';
import './Manage.css';
import Loading from '../Loading/loading';
import ItemTable from '../ItemTable/ItemTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Manage = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();
    const navigateToAddItem = () => {
        navigate("/additem");
    }
    if (!items) {
        return <Loading></Loading>;
    }
    else {
        return (
            <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                <h2 className='fw-bolder text-center my-5'><span className='text-secondary'>MANAGE</span> ITEMS</h2>
                <ItemTable items={items} setItems={setItems}></ItemTable>
                <div className='w-50 mx-auto my-5'><button onClick={navigateToAddItem} className='btn btn-secondary rounded-pill p-3 w-100'><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> ADD NEW ITEM</button></div>
            </div>
        );
    }
};

export default Manage;