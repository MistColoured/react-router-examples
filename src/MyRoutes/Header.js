import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <ul>
            <li><NavLink activeStyle={{ color: 'blue' }} exact to='/'>Home</NavLink></li>
            <li><NavLink to='/about' activeStyle={{ color: 'blue' }}>About</NavLink></li>
            <li><NavLink to='/contact' activeStyle={{ color: 'blue' }}>Contact</NavLink></li>
        </ul>
    </header>
);

export default Header;
