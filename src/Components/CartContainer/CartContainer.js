import React, {useContext} from 'react';
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
        <div className="wholeCart">
        <div className="titleContainer"><h3>Tu carrito de Compras</h3></div>
        {products.length === 0 ?
            (<p className="emptyCart">Tu carrito está vacío :( </p>)
            :products.map((product) => {
                return(
                    <div className="dataContainer" key={product.id}>
                        <p className="cartText">Id de tu producto: {product.id}</p>
                        <p className="cartText">Cantidad: {product.number}</p>
                        <p className="cartText">Título: {product.title}</p>
                        <p className="cartText">Precio Total: ${product.price * product.number}</p>
                        <button className="deleteButton" onClick={() => handleDel(product)}>X</button>
                    </div> 
                )
            })
            }
        </div>
        <div>
            <p>Total: </p>
        </div>
        <div className="buttonBack">
            <Link to="/">
            <button className="cartButton">Volver</button>
            </Link>
            <button className="cartButton" onClick={clearCart}>Borrar todo</button>
        </div>
        </>
    )
}

export default CartContainer; 

