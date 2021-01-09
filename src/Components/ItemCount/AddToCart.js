import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../Context/CartContext';
import './itemCount.css';

function Toggle({data: {id, number, price, title}}){
    const [showing, setShowing] = useState(false);
    const {getIformationFromApp} = useContext(CartContext);

    function add() {
        setShowing({ showing: !showing })
        console.log(`El numero de productos es ${number} y el id es: ${id}`);
}

    return(
    <>
    <div>
    { showing
    ? <Link onClick={getIformationFromApp(id, number, price, title)} to="/carrito"><button className="cart">Terminar Compra</button></Link>
    : <button className="cart" onClick={add}>Agregar al Carrito</button>
    }
    </div>
    </>
    )
}

export default Toggle;
