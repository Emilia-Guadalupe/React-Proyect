import React, {useContext} from 'react';
import ProductContext from '../Context/ProductContext';
import './ItemList.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';



function ItemList(){

    //const [product, setItem] = useState([]);
    const producto = useContext(ProductContext);

//useEffect con un setTimeout, agregado para simular un retraso de 4 segundos en mostrar los productos
//En resolve() se agrega lo que se quiere traer, en este caso, el array con los detalles de los productos. Una vez que eso está resuelto, en el .then se incluye setItem, para que la constante product tome el valor del array ItemDetails. Eso después se muestra en pantalla con un .map. 

//Ver en ItemDetails los comentarios respecto a los cambios aplicados, reemplazando los useEffect por un useContext, guardando el llamado a productos directamente en un Context para su uso en distintos componentes. Se deja este useEffect, ya sin uso, de manera provisoria: 

    return(
        <>
            {producto.map((e) => {
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

