import React from 'react';
import './SearchBar.css'

function SearchBar(){
    return(
        <div className="container">
            <input type="text" className="search-bar"/>
        </div>
    )
}

export default SearchBar; 

//Esta es una barra de búsqueda hecha con un input, que después va a ser reemplazada por un elemento real que pueda filtrar las búsquedas por término de los usuarios