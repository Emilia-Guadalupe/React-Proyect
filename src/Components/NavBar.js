import React, {Component} from 'react';
import { MenuItems } from './MenuItems';
import CartWidget from './CartWidget';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo" id="titulo"><i className="fas fa-cloud"></i>En la Nube</h1>  
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
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