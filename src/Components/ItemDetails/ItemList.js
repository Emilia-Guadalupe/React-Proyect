import React, {useState, useEffect} from 'react';
import { ItemDetails } from './Item';
import './ItemList.css';
import ItemCount from '../ItemCount/ItemCount';



function ItemList(){
    const [product, setItem] = useState([]);

//useEffect con un setTimeout, agregado para simular un retraso de 4 segundos en mostrar los productos
//En resolve() se agrega lo que se quiere traer, en este caso, el array con los detalles de los productos. Una vez que eso está resuelto, en el .then se incluye setItem, para que la constante product tome el valor del array ItemDetails. Eso después se muestra en pantalla con un .map. 

useEffect(() => {
    setTimeout(() => {
        const promise = new Promise((resolve, reject) => {
            resolve(ItemDetails);
        });
        promise.then(ItemDetails => {
            setItem(ItemDetails);
        })
    }, 4000);
},[])


    return(
        <>
            {product.map((item) => {
                return(
                        <div key={item.id} id="itemContainer">
                                <div id="book">
                                <img id="portada" src= {item.img} alt="Portada" />
                                </div>
                                <div>
                                <h2 className="description">{item.title}</h2>
                                <p className="description">{item.author}</p>
                                <p className="description">${item.price}</p>
                                </div>
                                <div>
                                <ItemCount />
                                </div>
                        </div>
                )
            })
            }
        </>
    )
}


export default ItemList;

