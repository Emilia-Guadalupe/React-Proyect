import React, {Component} from 'react';
import { MenuItems } from './MenuItems';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return(
            <nav className="NavBarItems">
                <Link to="/home">
                <h1 className="navbar-logo" id="titulo"><i className="fas fa-cloud"></i>En la Nube</h1>  
                </Link>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            {item.title}
                        </Link>
                        </li>
                    )
                })}
            </ul>
            <CartWidget />
            </nav>
        );
    }
}

export default NavBar;