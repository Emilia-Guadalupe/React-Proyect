import React, {useState, useContext} from 'react';
//import Toggle from './AddToCart';
import CartContext from '../Context/CartContext';
import ProductContext from '../Context/ProductContext';
import {Link} from 'react-router-dom';
import './itemCount.css';

function ItemCount({details: {id, stock, price, title}}){
    //Funciones y elementos del Counter: 
    const initial = 1;
    const [number, setNumber] = React.useState(initial);
    const itemStock = stock; 
    const limit = 1;
    const [empty, setEmpty] = useState("");
    const [showing, setShowing] = useState(false);

    //Funciones y elementos del Context:
    
    const { addProduct } = useContext(CartContext);
    const product = useContext(ProductContext);

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

function add(){
    setShowing({ showing: !showing });
    addProduct(product, number, id);
}

    return(
        <>
        <div id="container">
            <button id="left" className="button" onClick={less}>-</button>
            <p id="quantity">{number}</p>
            <button id="right" className="button" onClick={more}>+</button>
        </div>
        <div id="secondContainer">
    { showing
    ? <Link to="/carrito"><button className="cart">Terminar Compra</button></Link>
    : <button className="cart" onClick={add}>Agregar al Carrito</button>
    }
        </div>
        <div className="empty">{empty}</div>
        </>
    )
}

export default ItemCount;
