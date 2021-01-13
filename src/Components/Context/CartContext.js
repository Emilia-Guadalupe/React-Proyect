import React, {createContext, useState, useContext} from 'react';
//import ProductContext from '../Context/ProductContext';


const CartContext = createContext();

function CartContextProvider({children}){
    const [products, setProducts] = useState([]);

    const addProduct = (product, number,id) => {
    
    console.log(product)
    console.log(id)
    console.log(number);
    
    const existing = products.find(product => product.id === id);

    console.log(existing);

    setProducts([...products, { ...product, number }]);    

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


//Pruebas varias ---

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

    /*const [productId, setProductId] = useState();
    const [productPrice, setPrice] = useState();
    const [productTitle, setTitle] = useState();
    const [quantity, setQuantity] = useState();

    const dataProvider = [{ 
        "quantity": quantity, 
        "id": productId, 
        "price": productPrice, 
        "title": productTitle 
    }];*/

    //console.log(dataProvider);

    /*function addItem(){
        setProducts(products => [...product, dataProvider]);
    }*/