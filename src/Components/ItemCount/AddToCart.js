import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../Context/CartContext';
import './itemCount.css';

function Toggle({data: {id, number, price, title}}){
    const [showing, setShowing] = useState(false);
    const { setQuantity, setPrice, setTitle, setProductId, order, setOrder, dataProvider } = useContext(CartContext);

    function addItem(dataProvider){
        const placeOrder = [...order, dataProvider] 
        setOrder(placeOrder);
    }

    function add(dataProvider) {
        setShowing({ showing: !showing });
        setQuantity(number);
        setPrice(price);
        setTitle(title);
        setProductId(id);
        addItem(dataProvider)
    }

    return(
    <>
    <div>
    { showing
    ? <Link to="/carrito"><button className="cart">Terminar Compra</button></Link>
    : <button className="cart" onClick={add(dataProvider)}>Agregar al Carrito</button>
    }
    </div>
    </>
    )
}

export default Toggle;
