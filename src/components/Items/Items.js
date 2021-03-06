import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Item from '../Item/Item';
import './Items.css';
import Loading from '../Loading/loading';
const Items = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();
    let sixItems = [];
    if (!items) {
        return <Loading></Loading>;
    }
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }
    const navigateToManage = () => {
        navigate("/manageitems");
    }
    if (items.length <= 6) {
        sixItems = items;
    }
    else {
        for (let i = 0; i < 6; i++) {
            sixItems.push(items[i]);
        };
    }
    return (
        <div className='container shadow-lg p-3 my-5 bg-body rounded'>
            <h2 className='text-secondary text-center my-5'>ITEMS</h2>
            <div className='items-section '>
                {
                    sixItems.map(item => <Item
                        key={item._id}
                        item={item}
                        clickHandler={navigateToInventory}
                        buttonName="Stock Update"
                    ></Item>)
                }
            </div>
            <div className='w-50 mx-auto my-5'><button onClick={navigateToManage} className='btn btn-secondary rounded-pill p-3 w-100'>MANAGE ITEMS</button></div>
        </div>
    );
};

export default Items;