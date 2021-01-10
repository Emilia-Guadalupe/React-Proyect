import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../Context/CartContext';
import './itemCount.css';

function Toggle({data: {id, number, price, title}}){
    const [showing, setShowing] = useState(false);
    const { setQuantity, setPrice, setTitle, setProductId } = useContext(CartContext);

    function add() {
        setShowing({ showing: !showing });
        setQuantity(number);
        setPrice(price);
        setTitle(title);
        setProductId(id);
    }

    return(
    <>
    <div>
    { showing
    ? <Link to="/carrito"><button className="cart">Terminar Compra</button></Link>
    : <button className="cart" onClick={add}>Agregar al Carrito</button>
    }
    </div>
    </>
    )
}

export default Toggle;
