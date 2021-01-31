import React, {useContext} from 'react';
import ProductContext from '../../Context/ProductContext';
import { useParams, Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './categoryStyles.css';

function Categories(){
    
    //llamado a un Context que contiene el llamado al array de productos:
    const { product } = useContext(ProductContext);

    //useParams para llamar a los items del array, de acuerdo a su categoría (la editorial):
    const { category } = useParams();

    //Se mapean los productos del array, llamados desde el CartContext:

    return(
        <>
        <div>
            <h2 id="categoryTitle">Libros por categoría</h2>
        </div>
        <div id="biggerContainer">
        {product.length === 0 ?
            (<p id="loadingCategories">Cargando categoría...</p>)
            :product.map((e) => {
                return(
                    e.category === category ?
                    <div key={e.id} id="categoryContainer">
                                <div id="bookSection">
                                <div id="bookyDetail">
                                <Link to={`/itemDetailContainer/${e.category}/${e.id}`}>
                                <img id="bookCoverImage" src= {e.img} alt="Portada" />
                                </Link>
                                </div>
                                <div>
                                <h2 className="descriptionCategory">{e.title}</h2>
                                <p className="descriptionCategory">{e.author}</p>
                                <p className="descriptionCategory">${e.price}</p>
                                </div>
                                <div id="countContainer">
                                <ItemCount details={{id: e.id, stock: e.stock, price: e.price, title: e.title}}/>
                                </div>
                                </div>
                        </div> : null
                )  
            })
            }
        </div>
        </>
        )
}

export default Categories;
