import React from 'react';
import BestBook from '../BestBook/BestBook';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Home.css';

function Home(){
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
        <h3 id="itemList">Nuestros libros:</h3>
        <ItemListContainer />
        </div>
        </>
    )
}

export default Home; 

