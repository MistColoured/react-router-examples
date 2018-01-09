import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () =>(
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
  </header>
);

export default Header;
