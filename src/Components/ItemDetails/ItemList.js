import React, {useState, useEffect} from 'react';
import { ItemDetails } from './Item';
import './ItemList.css';


function ItemList(){
    const [product, setItem] = useState([]);

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
                                <div>
                                <img src={item.img} alt="Portada" />
                                </div>
                                <div>
                                <h2>{item.title}</h2>
                                <p>{item.author}</p>
                                <p>{item.price}</p>
                                </div>
                        </div>
                )
            })
            }
        </>
    )
}

export default ItemList;

