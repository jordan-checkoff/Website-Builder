import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Navbar = (props) => {

    return (
        <nav className="navbar">
            <Logo img={props.logo} name={props.name} />
            <Menu pages={props.pages} />
        </nav>
    )
}

export default Navbar;