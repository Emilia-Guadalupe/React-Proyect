import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail(){
    const [item, setItem] = useState([]);
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        setTimeout(() =>{
            const arrayDatos = fetch(`https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items/${id}`)
            arrayDatos.then(response => {
                return response.json()
            })
            .then(response => {
                setItem(response);
                console.log(response);
            })
        }, 200)
    },[id])

    return(
    <div>
        {item.id === id ? (
    <div className="wholeContainer">        
    <div id="itemDetailContainer" key={item.id}>
        <div id="bookPart">
            <div id="bookContainer">
            <img id="bookCover" src= {item.img} alt="Portada" />
            </div>
            <div>
            <ItemCount />
            </div>
        </div>
        <div id="content">
            <h2 className="details">{item.nombre}</h2>
            <p className="details">{item.nombre}</p>
            <p className="details">Precio: ${item.precio}</p>
            <p className="details">Idioma: {item.nombre}</p>
            <p className="details">Editorial: {item.nombre}</p>
            <p className="details">Cant. Páginas: {item.nombre}</p>
            <p className="details">Año de Publicación: {item.nombre}</p>
        </div>
    </div>
    <div className="abstractContainer">
            <h4 id="abstractTitle">Resumen:</h4>
            <p id="abstractText">{item.categoria}</p>
    </div>
    </div>
        ) : (
        <p>Trayendo información desde base de datos...</p>
        )}
    </div>
    )
}

export default ItemDetail;