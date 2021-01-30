import React, {useContext} from 'react';
import ProductContext from '../../Context/ProductContext';
import { useParams, Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

function Categories(){
    
    //Remplazada por una constante que llama a un Context que contiene el llamado al array de productos:
    const { product } = useContext(ProductContext);

    //useParams para llamar a un único item del array de productos, por el id:
    const {category} = useParams();

    //Se mapean los productos del array, llamados desde el CartContext:

    return(
        <div>
        {product.length === 0 ?
            (<p>Cargando datos</p>)
            :product.map((e) => {
                return(
                    e.category === category ?
                    <div key={e.id} id="itemCategoryContainer">
                                <div id="book">
                                <Link to={`/itemDetailContainer/${e.category}/${e.id}`}>
                                <img id="categoryImage" src= {e.img} alt="Portada" />
                                </Link>
                                </div>
                                <div>
                                <h2 className="categoryDescription">{e.title}</h2>
                                <p className="categoryDescription">{e.author}</p>
                                <p className="categoryDescription">${e.price}</p>
                                </div>
                                <div>
                                <ItemCount details={{id: e.id, stock: e.stock, price: e.price, title: e.title}}/>
                                </div>
                        </div> : null
                )  
            })
            }
        </div>
        )
}

export default Categories;
