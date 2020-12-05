import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greetings = 'Muy pronto, todas nuestras novedades'}) => {
    return <p className="hi">¡Hola! {greetings}</p>
}

export default ItemListContainer;