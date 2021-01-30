import React, {createContext, useState} from 'react';
import getFirestore from '../FirebaseSettings';

const CartContext = createContext();

function CartContextProvider({children}){
    const [products, setProducts] = useState([]);

    //Elementos del comprador de la orden: 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [compra,setCompra] = useState("");
    const [thanks, setThanks] = useState("");


    //Funciones del Carrito de Compras 

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

    //Funciones para armar órdenes de compra en Firebase

    const manejarCompra = (e) => {
        e.preventDefault();

        const buyerData = {
            buyer : {
                name, 
                phone, 
                email, 
                confirmEmail
            }, 

            items: products, 
            total: getGrandTotal()
        }

        setCompra(buyerData);

        const db = getFirestore();
        const OrderCollection = db.collection("orders");
        OrderCollection.add(buyerData)

        .then((res) => {
            OrderCollection.doc(res.id)
            .get()
            
            .then((querySnapshot) =>{
                if(!querySnapshot.exists){
                    console.log("No existe")
                } else {
                    setCompra({
                        id: querySnapshot.id, 
                        ...querySnapshot.data()
                    })
                }
            })
            .catch(error => console.log(error))
        })
        setThanks(`¡Gracias por tu compra, ${name}! El ID de tu orden es: ${compra.id}`)
    }

    return(
        <CartContext.Provider value={{ products, addProduct, delProduct, clearCart, productsCount, getGrandTotal, setName, name, setPhone, phone, email, setEmail, setConfirmEmail, confirmEmail, manejarCompra, compra, thanks }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;
export {CartContextProvider};