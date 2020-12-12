import React, {useState} from 'react';
import './itemCount.css';

function ItemCount(){
    const initial = 0;
    const [number, setNumber] = React.useState(initial);
    const [stock] = useState(10); 
    const [limit] = useState(0);


    function more(){
        if(number < stock){
            
        setNumber(number + 1);
        return;
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
        </>
    )
}

export default ItemCount;