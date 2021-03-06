import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <ul>
            <li><NavLink activeStyle={ { color: 'blue' } } exact to='/'>Home</NavLink></li>
            <li><NavLink activeStyle={ { color: 'blue' } } to='/about'>About</NavLink></li>
            <li><NavLink activeStyle={ { color: 'blue' } } to='/contact'>Contact</NavLink></li>
        </ul>
    </header>
);

export default Header;
