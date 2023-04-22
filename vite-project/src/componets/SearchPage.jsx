import React from 'react'

export default function SearchPage({data}) {

  // get search term from url after the last /
  const searchTerm = window.location.href.split('/').pop()


  console.log(`SearchPage: ${searchTerm}`)


  
  return (
    <main>
      <h1>Search Page</h1>
      <h2>{searchTerm}</h2>
      {/* search relevant items in data based on name */
      data.products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
      

    </main>
  )
}
