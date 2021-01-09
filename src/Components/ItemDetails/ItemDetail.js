import React, {useContext} from 'react';
import ProductContext from '../Context/ProductContext';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail(){
    // Constante con la que se llamaba al array de productos al componente: 

    //const [item, setItem] = useState([]);
    
    //Remplazada por una constante que llama a un Context que contiene el llamado al array de productos:
    const producto = useContext(ProductContext);

    //useParams para llamar a un único item del array de productos, por el id:
    const {id} = useParams();

    //UseEffect guardado de manera provisoria, era usado para llamar al array de productos al Componente, antes de reemplazarlo por un llamado al Context:

    /*useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(productDetails);
            });
            promise.then(productDetails => {
                setItem(productDetails);
            })
        }, 500);
    },[id])*/

    //Se mapean los productos del array, llamados desde el CartContext:

    return(
        <div>
        {producto.length === 0 ?
            (<p>Cargando datos</p>)
            :producto.map((e) => {
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

