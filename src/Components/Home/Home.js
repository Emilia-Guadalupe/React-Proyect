import React, {useContext} from 'react';
import ProductContext from '../../Context/ProductContext';
import BestBook from '../BestBook/BestBook';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
//import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Home.css';

function Home(){

    const { items } = useContext(ProductContext);

    return(
        <>
        <>
        <Header />
        </>
        <>
        <SearchBar />
        </>
        <>
        <BestBook />
        </>
        <div id="books">
        <h3 className="itemList">Nuevos En La Nube:</h3>
        <div id="containerContainer">
        {items.length === 0 ?
            (
                <>
                <p className="itemList"> Cargando libros... </p>
                </>
                )
            :items.map((e) => {
                return(
                    <div id="homeContainer" key={e.id}>
                                <div id="home">
                                <Link to={`/itemDetailContainer/${e.category}/${e.id}`}>
                                <img id="portadaHome" src= {e.img} alt="Portada" />
                                </Link>
                                </div>
                                <div>
                                <h2 className="homeDescription">{e.title}</h2>
                                <p className="homeDescription">{e.author}</p>
                                <p className="homeDescription">${e.price}</p>
                                </div>
                                <div>
                                <ItemCount details={{id: e.id, stock: e.stock, price: e.price, title: e.title}}/>
                                </div>
                        </div>
                )
            })
            }
        </div>    
        </div>
        </>
    )
}

export default Home; 

