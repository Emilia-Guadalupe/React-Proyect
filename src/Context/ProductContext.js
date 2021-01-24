import React, {createContext, useState, useEffect} from 'react';
import getFirestore from '../FirebaseSettings';

    //Se crea el Contexto:
    const ProductContext = createContext();

function ProductContextProvider({children}) {
    const [product, setProduct] = useState([]);
    const [items, setItems] = useState([]);

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
        const highPrice = ItemCollection.where('category', '==', 'Tor-Books');

        query
        .then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setProduct(data);
        })
        .catch((error) => {
            console.log(error)
        })

        highPrice.get().then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setItems(data);
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

export default ProductContext;
export {ProductContextProvider};
