import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Navbar = (props) => {

    return (
        <nav className="navbar">
            <Menu />
        </nav>
    )
}

export default Navbar;