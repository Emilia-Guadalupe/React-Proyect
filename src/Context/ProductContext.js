import React, {createContext, useState, useEffect} from 'react';
//import { productDetails } from '../Components/ItemDetails/Item';
import getFirestore from '../Firebase';

    //Se crea el Contexto:
    const ProductContext = createContext();

    //Función que le da su contenido al Contexto, en este caso es el Promise que llama al array de productos:

function ProductContextProvider({children}) {
    const [product, setProduct] = useState([]);
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState();

    /*useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(productDetails);
            });
            promise.then(productDetails => {
                setProduct(productDetails);
            })
        }, 100);
    },[])*/

    //Se llama a la constante CartContext y se le asigna un valor dentro de Provider. De esa manera, ese valor se puede llevar a todos los Componentes que lo necesiten. En este caso, se va a establecer a CartContextProvider como un elemento que va a englobar a toda la App, ya que lo usan Componentes de distintos niveles en la App y es útil que esté accesible para todos. 

    useEffect(() => {
        const db = getFirestore();

        const ItemCollection = db.collection(" ItemCollection");
        const query = ItemCollection.get();

        query
        .then((resultado) => {
            setProduct(resultado.docs.map(doc => doc.data()));
            setItemId(resultado.docs.map(doc => doc.id));
        })
        .catch((error) => {
            console.log(error)
        })

    },[]);
    
    
    useEffect(() => {
        const db = getFirestore();

        const ItemCollection = db.collection(" ItemCollection");
        const highPrice = ItemCollection.where('category', '==', 'Tor-Books');

        highPrice.get().then((resultado) => {
            setItems(resultado.docs.map(doc => doc.data()));
        })
        .catch((error) => {
            console.log(error)
        })

    },[]);

    return(
        <ProductContext.Provider value={{product, items}}>
            {children}
        </ProductContext.Provider>
    )
}

    //Se exporta la constante CartContext, para que pueda ser llamada por el useContext en los distintos Componentes y además se exporta la función interna CartContextProvider, que se va a llevar y llamar en App.js

export default ProductContext;
export {ProductContextProvider};
