import React, {useState} from 'react';
import Toggle from './AddToCart';
import './itemCount.css';

function ItemCount({details: {id, stock, price, title}}){
    const initial = 1;
    const [number, setNumber] = React.useState(initial);
    const itemStock = stock; 
    const limit = 1;
    const [empty, setEmpty] = useState("");

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

    return(
        <>
        <div id="container">
            <button id="left" className="button" onClick={less}>-</button>
            <p id="quantity">{number}</p>
            <button id="right" className="button" onClick={more}>+</button>
        </div>
        <div id="secondContainer">
            <Toggle data={{number: number, id: id, price, title}} />
        </div>
        <div className="empty">{empty}</div>
        </>
    )
}

export default ItemCount;
