import React, {useState} from 'react'

import './comp-css/searchbar.css'

export default function SearchBar({data}) {

    const [searchTerm, setSearchTerm] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
      
        if (value.trim() === '') {
          setSuggestions([]);
        } else {
          const results = data.products.filter(
            (product) => product.name.toLowerCase().includes(value.toLowerCase())
          );
          setSuggestions(results);
        }
      };
      
      const handleSuggestionClick = (name) => {
        setSearchTerm(name)
        setSuggestions([])
      }
    


    return (
        <div className='search-bar'>
            <input className='search-input' type='text' placeholder='Search'
            value={searchTerm}
            onChange={handleInputChange}
            />

        {suggestions.length > 0 && (
        <ul className='suggestions-list'>
            {suggestions.map((product) => (
            <li
                key={product.id}
                className='suggestion'
                onClick={() => handleSuggestionClick(product.name)}
            >
                {product.name}
            </li>
            )
            )}
        </ul>
        )}



        </div>
    )
}
