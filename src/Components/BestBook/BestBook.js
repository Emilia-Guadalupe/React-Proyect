import React, {useEffect, useState} from 'react';
import './BestBook.css';

function BestBook(){
    const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() =>{
            const arrayDatos = fetch("info.json")
            arrayDatos.then(response => {
                return response.json()
            })
            .then(response => {
                setItem(response[4])
            })
        }, 1000)
    },[])

    return(
    <div>
    <div>
        <h2 id="recomendation">¡Nuestro recomendado del mes!</h2>
    </div>
        {item ? (
    <div id="bestBookContainer">
        <div id="bookDetails">
            <div id="photoContainer">
            <img id="bookCoverPhoto" src= {item.img} alt="Portada" />
            </div>
        </div>
        <div id="contentBook">
            <h2 className="information">{item.title}</h2>
            <p className="information">{item.author}</p>
        </div>
    </div>
        ) : (
        <p>Trayendo información desde base de datos...</p>
        )}
    </div>
    )
}



export default BestBook;