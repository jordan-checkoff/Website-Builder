import React from 'react';
import { Link } from "react-router-dom";
import {pages} from '../UserData';

const Menu = (props) => {

    return (
        <nav>
            <ul>
                {pages.map((page) => <Link key={page.name} to={page.link}><li>{page.name}</li></Link>)}
            </ul>
        </nav>
    )
}

export default Menu;