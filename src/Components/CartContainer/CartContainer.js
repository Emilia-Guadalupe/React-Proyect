import React, {useContext, useState} from 'react';
import CartContext from '../Context/CartContext';
import {Link} from 'react-router-dom';
import './cartStyles.css';

function CartContainer() {
    const { quantity, productId, productPrice, productTitle, datos } = useContext(CartContext);

    console.log(datos);

    return(
        <>
        <div className="wholeCart">
        <div className="titleContainer">
            <h3>Tu carrito de compras: </h3>
        </div>
        <div className="dataContainer">
            <p className="cartText">Id de tu producto: {productId}</p>
            <p className="cartText">Cantidad: {quantity}</p>
            <p className="cartText">Título: {productTitle}</p>
            <p className="cartText">Precio: ${productPrice}</p>
            <button>X</button>
        </div>
        <div className="buttonBack">
        <Link to="/">
            <button className="cartButton">Volver</button>
        </Link>
            <button className="cartButton">Borrar todo</button>
        </div>
        </div>
        </>
    )
}

export default CartContainer; 