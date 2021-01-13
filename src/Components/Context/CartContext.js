import React, {createContext, useState} from 'react';

const CartContext = createContext();

function CartContextProvider({children}){
    const [products, setProducts] = useState([]);

    const addProduct = (datos, number) => {
    
    //const existing = product.find(products => products.id === id);

    //console.log(existing);

    setProducts([...products, { ...datos, number }]);    

       /* // Si existe
        if (existing) {
        setProducts([...product]);
        } else {
          // Agrega uno nuevo y crea un array nuevo
        setProducts([...products, { ...product, number }]);
        }*/
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