import React from 'react';
import './SearchBar.css'
//import {Link} from 'react-router-dom';

function SearchBar(){
    return(
        <>
        <div className="container">
        <input type="text" className="search-bar"/>
        <button id="buscar">Buscar</button>
        </div>
        </>
    )
}

export default SearchBar; 



/*
<div className="container">
            
        </div>
*/