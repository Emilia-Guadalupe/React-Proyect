import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './itemCount.css';

function ItemCount({details: {id, stock}}){
    const initial = 1;
    const [number, setNumber] = React.useState(initial);
    const itemStock = stock; 
    const limit = 1;
    const [empty, setEmpty] = useState("");
    const [quantity, setQuantity] = useState();

function more(){
    if(number < itemStock){ 
    setNumber(number + 1);
    return;
    } if(itemStock === 0){
        setEmpty("¡Nos quedamos sin stock!")
    } 
}

function less(){
    if(number > limit){
    setNumber(number - 1);
    return;
    }
}

function add() {
        setQuantity(number);
        console.log(`El numero de productos es ${number} y el id es: ${id}`)
}

    return(
        <>
        <div id="container">
            <button id="left" className="button" onClick={less}>-</button>
            <p id="quantity">{number}</p>
            <button id="right" className="button" onClick={more}>+</button>
        </div>
        <div id="secondContainer">
            <Link to="/carrito">
            <button id="cart" onClick={add}>Agregar al Carrito</button>
            </Link>
        </div>
        <div className="empty">{empty}</div>
        </>
    )
}

export default ItemCount;