import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Header = () => (
    <div>
        <nav>
            <ul>
                <li><NavLink exact activeStyle={ { color: 'blue' } } to='/'>Home</NavLink></li>
                <li><NavLink activeStyle={ { color: 'blue' } } to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink activeStyle={ { color: 'blue' } } to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    </div>
);

export default Header;
