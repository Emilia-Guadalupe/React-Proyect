import React, {createContext, useState} from 'react';

const CartContext = createContext();

function CartContextProvider({children}){
    const [quantity, setQuantity] = useState();
    let [productId, setProductId] = useState();
    let [productPrice, setPrice] = useState();
    let [productTitle, setTitle] = useState()

    const datos = { quantity, productId, productPrice, productTitle } 

    return(
        <CartContext.Provider value={{ quantity, setQuantity, productId, setProductId, setPrice, productPrice, productTitle, setTitle, datos }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;
export {CartContextProvider};