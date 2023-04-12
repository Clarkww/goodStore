import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';


import Header  from './componets/Header'
import ProductPage from './componets/ProductPage'

import HomePage from './componets/HomePage'



import './App.css'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, [])

  
  if (!data) {
    return <div>Loading...</div>
  }
  // console.log(data.products[0].name)
  


  return (
    <>

      <Router>
      <Header />
          <Routes>
            <Route exact path='/' element={<HomePage data={data} />} />
            <Route path='/products/:id' element={<ProductPage product={data} />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
