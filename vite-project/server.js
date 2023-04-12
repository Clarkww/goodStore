import express from 'express'
import cors from 'cors'
import { createServer } from 'vite'
import fs from 'fs'

const app = express()
const port = 3000

app.use(cors())

// Serve the static files from the public directory
app.use(express.static('public'))

// Endpoint to return the data from the JSON file
app.get('/data', (req, res) => {
  // Read the contents of the JSON file
  fs.readFile('./data/products.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('Internal Server Error')
      return
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data)

    // Send the JSON data as the response
    res.json(jsonData)
  })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})