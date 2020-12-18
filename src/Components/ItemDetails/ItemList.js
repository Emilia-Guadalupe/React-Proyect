import React, {useState, useEffect} from 'react';
import { ItemDetails } from './Item';
import './ItemList.css';


function ItemList(){
    const [product, setItem] = useState([ItemDetails]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setItem([product])
        }, 4000);

        return() => clearTimeout(timeout)
    },[product])

    return(
        <>
            {product.map((item, index) => {
                return(
                        <div key={index} id="itemContainer">
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

