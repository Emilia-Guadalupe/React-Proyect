import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './itemCount.css';

function Toggle({data: {id, number}}){
    const [showing, setShowing] = useState(false);
    const [quantity, setQuantity] = useState();

    function add() {
        setQuantity(number);
        console.log(`El numero de productos es ${number} y el id es: ${id}`);
}

    return(
    <>
    <div>
    { showing
    ? <Link to="/carrito"><button className="cart" onClick={add}>Terminar Compra</button></Link>
    : <button className="cart" onClick={() => setShowing({ showing: !showing })}>Agregar al Carrito</button>
    }
    </div>
    </>
    )
}

export default Toggle;
