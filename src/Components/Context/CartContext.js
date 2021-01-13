import React, {createContext, useState, useContext} from 'react';
//import ProductContext from '../Context/ProductContext';


const CartContext = createContext();

function CartContextProvider({children}){
    const [products, setProducts] = useState([]);

    const addProduct = (product, number) => {
    
    const existing = products.find((p) => p.id === product.id);

    // Si existe
    if (existing) {
    // Crea un array nuevo
    setProducts([...product]);
    } else {
      // Agrega uno nuevo y crea un array nuevo
    setProducts([...products, { ...product, number }]);
    }


    };

    const delProduct = (id) => {
        products.splice(
        products.findIndex((p) => p.id === id),
        1
        );
        setProducts([...products]);
    };



    return(
        <CartContext.Provider value={{ products, addProduct, delProduct }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;
export {CartContextProvider};

/*const [number, setnumber] = useState();
    const [productId, setProductId] = useState();
    const [productPrice, setPrice] = useState();
    const [productTitle, setTitle] = useState();
    const [order, setOrder] = useState([]); 

    const dataProvider = [{ 
        "number": number, 
        "id": productId, 
        "price": productPrice, 
        "title": productTitle 
    }];*/