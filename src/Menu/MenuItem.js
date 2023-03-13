import React from 'react';
import './MenuItem.css'

const MenuItem = props => {

    const clickHandler = (event) => {
        const { id } = event.target.closest('.menu_item');
        console.log(id);
    }

    return (
        <div id={props.title} className='menu_item' onClick={clickHandler}>
            <img className='icon' src={props.icon}  alt={props.title}/>
            <h2>{props.title}</h2>
        </div>
    );
};

export default MenuItem;
