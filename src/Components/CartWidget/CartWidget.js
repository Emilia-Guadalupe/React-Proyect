import React, {useContext} from 'react';
import './cartWidget.css';
import CartContext from '../../Context/CartContext';

function CartWidget(){

    const { productsCount } = useContext(CartContext);

    return(
        <>
        <div className="cartPart">
        <span><i className="fas fa-shopping-cart"></i></span>
        <p>{productsCount()}</p>
        </div>
        </>
    )
}

export default CartWidget;