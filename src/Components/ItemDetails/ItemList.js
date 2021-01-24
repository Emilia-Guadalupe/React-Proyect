import React, {useContext} from 'react';
import ProductContext from '../../Context/ProductContext';
import './ItemList.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';



function ItemList(){

    const { product } = useContext(ProductContext);


    return(
        <>
            {product.length === 0 ?
                (
                <>
                <p className="loading"> Cargando libros... </p>
                </>
                ): product.map((e) => {
                return(
                        <div key={e.id} id="itemContainer">
                                <div id="book">
                                <Link to={`/itemDetailContainer/${e.category}/${e.id}`}>
                                <img id="portada" src= {e.img} alt="Portada" />
                                </Link>
                                </div>
                                <div>
                                <h2 className="description">{e.title}</h2>
                                <p className="description">{e.author}</p>
                                <p className="description">${e.price}</p>
                                </div>
                                <div>
                                <ItemCount details={{id: e.id, stock: e.stock, price: e.price, title: e.title}}/>
                                </div>
                        </div>
                )
            })
            }
        </>
    )
}


export default ItemList;

