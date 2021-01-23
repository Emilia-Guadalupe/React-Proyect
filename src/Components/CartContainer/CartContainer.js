import React, {useContext} from 'react';
import CartContext from '../../Context/CartContext';
import CartForms from '../CartForms/CartForms';
import {Link} from 'react-router-dom';
import './cartStyles.css';

function CartContainer() {

    const { products, delProduct, clearCart, getGrandTotal, productsCount } = useContext(CartContext);

    const handleDel = (p) => {
        delProduct(p.id);
    };

    return(
        <>
        <div className="CartContainer">
        <div className="wholeCart">
        <div className="buttonBack">
            <Link to="/">
            <button className="cartButton">Volver</button>
            </Link>
            <button className="cartButton" onClick={clearCart}>Borrar todo</button>
        </div>
        <div className="titleContainer"><h3>Tu carrito de Compras</h3></div>
        {products.length === 0 ?
            (
                <>
                <p className="emptyCart">Tu carrito está vacío :( </p>
                <p className="emptyCart">Hacé click en "Volver" para elegir tus libros :)</p>
                </>
                )
            :products.map((product) => {
                return(
                    <div className="dataContainer" key={product.id}>
                        <p className="cartText">Id de tu producto: {product.id}</p>
                        <p className="cartText">Cantidad: {product.number}</p>
                        <p className="cartText">Título: {product.title}</p>
                        <p className="cartText">Precio por unidad: ${product.price}</p>
                        <p className="cartText">Precio Total: ${product.price * product.number}</p>
                        <button className="deleteButton" onClick={() => handleDel(product)}>X</button>
                    </div> 
                )
            })
            }
        </div>
        <div className="totals">
            <p>Cantidad de Productos:</p>
            <p>{productsCount()}</p>
            <p>Total Compra:</p>
            <p>${getGrandTotal()}</p>
        </div>
        </div>
        <div>
            <CartForms />
        </div>
        </>
    )
}

export default CartContainer; 

