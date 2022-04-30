import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Item from '../Item/Item';
import './Items.css';
const Items = () => {
    const [items, setItems] = useItems();
    let sixItems = [];
    console.log(items);
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }
    if (items.length <= 6) {
        sixItems = items;
    }
    else {
        for (let i = 0; i < 6; i++) {
            sixItems.push(items[i]);
        };
    }
    console.log(sixItems);
    return (
        <div className='container'>
            <h2 className='text-secondary text-center my-5'>ITEMS</h2>
            <div className='items-section '>
                {
                    sixItems.map(item => <Item
                        item={item}
                        clickHandler={navigateToInventory}
                        buttonName="Stock Update"
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;