import React, {useContext} from 'react';
import ProductContext from '../../Context/ProductContext';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail(){
    
    //Remplazada por una constante que llama a un Context que contiene el llamado al array de productos:
    const { product } = useContext(ProductContext);

    //useParams para llamar a un único item del array de productos, por el id:
    const {id} = useParams();

    //Se mapean los productos del array, llamados desde el CartContext:

    return(
        <div>
        {product.length === 0 ?
            (<p>Cargando datos</p>)
            :product.map((e) => {
                return(
                    e.id === id ?
                    <div className="wholeContainer" key={e.id}>        
            <div id="itemDetailContainer">
            <div id="bookPart">
                <div id="bookContainer">
                <img id="bookCover" src= {e.img} alt="Portada" />
                </div>
                <div>
                <ItemCount details={{id: e.id, stock: e.stock, price: e.price, title: e.title}} />
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

