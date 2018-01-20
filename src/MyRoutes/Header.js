import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header;
