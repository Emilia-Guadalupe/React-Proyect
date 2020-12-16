import React from 'react';
//import './ItemListContainer.css';
import ItemList from '../ItemDetails/ItemList';
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = () => {
    return (
    <div id="contenedor"> 
        <ItemList />
        <>
        <ItemCount />
        </>
    </div>  
    )
}

export default ItemListContainer;