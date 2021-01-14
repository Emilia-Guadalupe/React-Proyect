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


    return(
        <CartContext.Provider value={{ products, addProduct, delProduct, clearCart  }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;
export {CartContextProvider};