import React, {useContext} from 'react';
import ProductContext from '../../Context/ProductContext';
import { Link } from 'react-router-dom'
import './SearchBar.css'

function SearchBar(){

    const { categories } = useContext(ProductContext);

    return(
        <>
        <div className="searchContainer">
        <ul>
        {categories.map(category =>{
            return(
                <Link key={category.id} to={`/categories/${category.category}`}>
                    {category.category}
                </Link>
            )
        })}
        </ul>
        </div>
        </>
    )
}

export default SearchBar; 

