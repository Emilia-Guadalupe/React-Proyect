import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greetings = 'Muy pronto, todas nuestras novedades'}) => {
    return (
    <div id="contenedor"> 
    <p className="hi">¡Hola! {greetings}</p>
    </div>  
    )
}

export default ItemListContainer;