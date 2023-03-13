import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import home_icon from '../icons/home.svg'
import table_icon from '../icons/table.svg'

const Menu = props => {
    return (
        <div className='menu'>
            <MenuItem icon={home_icon} title='Home' />
            {props.tables.map(table => <MenuItem key={table} icon={table_icon} title={table} />)}
        </div>
    );
};

export default Menu;
