import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import SearchBar from '../SearchBar/SearchBar';

function Libros(){
    return(
        <div className="display">
            <>
            <SearchBar />
            </>
            <>
            <ItemListContainer />
            </>
        </div>
    )
}

export default Libros; 