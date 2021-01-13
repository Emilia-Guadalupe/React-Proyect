import React, {useContext, useState} from 'react';
import CartContext from '../Context/CartContext';
import {Link} from 'react-router-dom';
import './cartStyles.css';

function CartContainer() {

    const { products, delProduct, clearCart } = useContext(CartContext);

    const handleDel = (p) => {
        delProduct(p.id);
    };

    return(
        <>
        <div>
        <div className="buttonBack">
            <Link to="/">
            <button className="cartButton">Volver</button>
            </Link>
            <button className="cartButton" onClick={clearCart}>Borrar todo</button>
        </div>

        {products.map((product) => {
                return(
                    <div id="itemContainer">
                        <p className="cartText">Id de tu producto: {product.id}</p>
                        <p className="cartText">Cantidad: {product.number}</p>
                        <p className="cartText">Título: {product.title}</p>
                        <p className="cartText">Precio: ${product.price}</p>
                        <button onClick={() => handleDel(product)}>X</button>
                    </div> 
                )
            })
            }
        </div>
        <div>
        <h5>Total:</h5>
        <h5>Ejemplo</h5>
        </div>
        </>
    )
}

export default CartContainer; 

//    const { order } = useContext(CartContext);
