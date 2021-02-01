import React, {createContext, useState, useEffect} from 'react';
import getFirestore from '../FirebaseSettings';

    //Se crea el Contexto:
    const ProductContext = createContext();

function ProductContextProvider({children}) {
    const [product, setProduct] = useState([]);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        //Llamar a toda la base de datos
        const ItemCollection = db.collection(" ItemCollection");
        const query = ItemCollection.get();

        //Llamar a la base de datos con un filtro
        const selectedCategory = ItemCollection.where('category', '==', 'Tor-Books');

        //Llamar a la base de datos de categorías
        const categoryCollection = db.collection("categories");
        const ask = categoryCollection.get();

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

        selectedCategory.get().then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setItems(data);
        })
        .catch((error) => {
            console.log(error)
        })

        ask
        .then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setCategories(data);
        })
        .catch((error) => {
            console.log(error)
        })

    },[]);
    

    return(
        <ProductContext.Provider value={{product, items, categories}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;
export {ProductContextProvider};
