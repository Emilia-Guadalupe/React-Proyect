import React, {createContext, useState} from 'react';

const CartContext = createContext();

function CartContextProvider({children}){
    const [products, setProducts] = useState([]);

    const addProduct = (datos, number) => {
    
    const existing = products.find((p) => p.id === datos.id);

    if (existing) {
        // Sumo al existente
        existing.number += number;
        // Crea un array nuevo
        } else {
        setProducts([...products, { ...datos, number }]);    
        }
    };

    const delProduct = (id) => {
        products.splice(
        products.findIndex((p) => p.id === id),
        1
        );
        setProducts([...products]);
    };

    const clearCart = () => {
        setProducts([]);
    }

    const productsCount = () => {
        return products.reduce((total, p) => (total += p.number), 0);
    };
    
    const getGrandTotal = () => {
        return products.reduce((total , p) => (total += p.price * p.number), 0);
    };

    return(
        <CartContext.Provider value={{ products, addProduct, delProduct, clearCart, productsCount, getGrandTotal  }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;
export {CartContextProvider};