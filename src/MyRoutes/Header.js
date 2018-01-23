import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <ul>
            <li><NavLink exact to='/' activeStyle={{ color: 'blue'}}>Home</NavLink></li>
            <li><NavLink exact to='/about' activeStyle={{ color: 'blue'}}>About</NavLink></li>
            <li><NavLink exact to='/contact' activeStyle={{ color: 'blue'}}>Contact</NavLink></li>
        </ul>
    </header>
);

export default Header;
