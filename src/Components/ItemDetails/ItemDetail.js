import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { productDetails } from '../ItemDetails/Item';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail(){
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(productDetails);
            });
            promise.then(productDetails => {
                setItem(productDetails);
            })
        }, 500);
    },[id])

    return(
        <div>
        {item.length === 0 ?
            (<p>Cargando datos</p>)
            :item.map((e) => {
                return(
                    e.id === id ?
                    <div className="wholeContainer" key={e.id}>        
            <div id="itemDetailContainer">
            <div id="bookPart">
                <div id="bookContainer">
                <img id="bookCover" src= {e.img} alt="Portada" />
                </div>
                <div>
                <ItemCount details={{id: e.id}} />
                </div>
            </div>
            <div id="content">
                <h2 className="details">{e.title}</h2>
                <p className="details">{e.author}</p>
                <p className="details">Precio: ${e.price}</p>
                <p className="details">Idioma: {e.language}</p>
                <p className="details">Editorial: {e.publisher}</p>
                <p className="details">Cant. Páginas: {e.pages}</p>
                <p className="details">Año de Publicación: {e.year}</p>
            </div>
            </div>
            <div className="abstractContainer">
                <h4 id="abstractTitle">Resumen:</h4>
                <p id="abstractText">{e.abstract}</p>
            </div>
        </div> : null
                )  
            })
            }
        </div>
        )
}

export default ItemDetail;

