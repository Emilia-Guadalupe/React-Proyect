import React, {useContext} from 'react';
import ProductContext from '../../Context/ProductContext';
import { Link } from 'react-router-dom'
import './SearchBar.css'

function SearchBar(){

    const { categories } = useContext(ProductContext);

    return(
        <>
        <div className="searchContainer">
        <ul id="categoryDisplay">
        {categories.map(category =>{
            return(
                <Link key={category.id} className="linkToCategory" to={`/categories/${category.category}`}>
                    <li id="categoryLink">{category.category}</li>
                </Link>
            )
        })}
        </ul>
        </div>
        </>
    )
}

export default SearchBar; 

