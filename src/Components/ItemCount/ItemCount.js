import React, {useState} from 'react';
import './itemCount.css';

function ItemCount(){
    const initial = 1;
    const [number, setNumber] = React.useState(initial);
    const stock = 10; 
    const limit = 0;
    const [empty, setEmpty] = useState("");


function more(){
    if(number < stock){ 
    setNumber(number + 1);
    return;
    } if(stock === 0){
        setEmpty("¡Nos quedamos sin stock!")
    } 
}

function less(){
    if(number > limit){
    setNumber(number - 1);
    return;
    }
}

    return(
        <>
        <div id="container">
            <button id="left" className="button" onClick={less}>-</button>
            <p id="quantity">{number}</p>
            <button id="right" className="button" onClick={more}>+</button>
        </div>
        <div id="secondContainer">
            <button id="cart">Agregar al Carrito</button>
        </div>
        <div className="empty">{empty}</div>
        </>
    )
}

export default ItemCount;