import React from 'react';
import { ItemDetails } from './Item';

function ItemList(){
    return(
        <>
            {ItemDetails.map((item, index) => {
                return(
                        <article key={index}>
                                <div>
                                <img src={item.img} alt="Portada"/>
                                </div>
                                <div>
                                <h2>{item.title}</h2>
                                <p>{item.author}</p>
                                <p>{item.price}</p>
                                </div>
                        </article>
                )
            })}
        </>
    )
}

export default ItemList;

