import React, {useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail(){
    const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() =>{
            const arrayDatos = fetch("info.json")
            arrayDatos.then(response => {
                return response.json()
            })
            .then(response => {
                setItem(response[0])
            })
        }, 3000)
    },[])

    return(
    <div>
        {item ? (
    <div id="itemDetailContainer">
        <div id="bookPart">
            <div id="bookContainer">
            <img id="bookCover" src= {item.img} alt="Portada" />
            </div>
            <div>
            <ItemCount />
            </div>
        </div>
        <div id="content">
            <h2 className="details">{item.title}</h2>
            <p className="details">{item.author}</p>
            <p className="details">Precio: ${item.price}</p>
            <p className="details">Idioma: {item.language}</p>
            <p className="details">Editorial: {item.publisher}</p>
            <p className="details">Cant. Páginas: {item.pages}</p>
            <p className="details">Año de Publicación: {item.year}</p>
        </div>
    </div>
        ) : (
        <p>Trayendo información desde base de datos...</p>
        )}
    </div>
    )
}

export default ItemDetail;