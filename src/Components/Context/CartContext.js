import React, {createContext, useState} from 'react';

const CartContext = createContext();

function CartContextProvider({children}){
    const [quantity, setQuantity] = useState();
    let [productId, setProductId] = useState("no id");
    let [productPrice, setPrice] = useState();
    let [productTitle, setTitle] = useState("no title")

    const getIformationFromApp = (id, number, price, title) => {
        setQuantity(number);
        setProductId(id);
        setPrice(price);
        setTitle(title);
    };

    console.log(quantity, productId);


    return(
        <CartContext.Provider value={{ quantity, setQuantity, getIformationFromApp, productId, productPrice, productTitle }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;
export {CartContextProvider};