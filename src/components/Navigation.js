import React from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/navigation.css';

const Navigation = () =>{
    return(
            <nav>
            <ul>
                <li><NavLink to="/" exact>Start</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/admin">Admin Panel</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;