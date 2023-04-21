import React, {useState} from 'react'

import './comp-css/searchbar.css'

import { FaSearch } from 'react-icons/fa'

export default function SearchBar({data, gSearchTerm, setGSearchTerm}) {

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
        
        // 
      }
      
      // const handleSearch = () => {
      //   setGSearchTerm(searchTerm)
      //   setSearchTerm('')
      //   setSuggestions([])
      //   // link to search page


      // }

      // onclick redirect to search page with search term
      const handleSearch = () => {
        // setGSearchTerm(searchTerm)
        setSearchTerm('')
        setSuggestions([])
        // link to search page
        window.location.href = `/search/${searchTerm}`
        

      }




      
    


    return (
        <div className='search-bar'>
            <input className='search-input' type='text' placeholder='Search'
            value={searchTerm}
            onChange={handleInputChange}
            // on key press enter handle search
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch()
                }
              }}
            />

            
            <button className='search-btn'
            onClick={handleSearch}
            >
                <FaSearch />
            </button>

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
