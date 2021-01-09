import React, {useState, useContext} from 'react';
import CartContext from '../Context/CartContext';

function CartContainer() {
    const { quantity, productId, productPrice, productTitle } = useContext(CartContext);

    return(
        <>
        <div>
            <h3>Tu carrito de compras: </h3>
            <p>Id de tu producto: {productId}</p>
            <p>La cantidad seleccionada es: {quantity}</p>
            <p>El título del libro es: ${productPrice}</p>
            <p>El precio del producto es: {productTitle}</p>
        </div>
        </>
    )
}

export default CartContainer; 