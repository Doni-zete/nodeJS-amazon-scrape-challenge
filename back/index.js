// Imports used
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

// Import CORS to allow requests from different origins
const cors = require('cors')
// Create an instance of the Express application
const app = express()
// Define the port on which the server will run
const PORT = 3000

// Use the CORS middleware to allow requests from different origins
app.use(cors())

// Endpoint for scraping data from Amazon
app.get('/api/scrape', async (req, res) => {
 try {
  // Get the search keyword from the URL query
  const keyword = req.query.keyword

  // Check if the "keyword" parameter is present in the request
  if (!keyword) {
   // Return a 404 status code with a message indicating that the keyword was not found
   return res.status(404).json({ error: 'Search keyword not found' })
  }

  // Build the Amazon search URL with the keyword
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`

  // HTTP request configuration
  const config = {
   headers: {
    'User-Agent':
     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Accept-Language': 'en-US, en;q=0.5',
   },
   timeout: 2000, // 2-second timeout for the request
  }

  // Perform a GET request to the search URL with the defined configurations
  const response = await axios.get(url, config)

  // Check if the response was successful (status code 200)
  if (response.status === 200) {
   const html = response.data
   // Load the HTML content obtained from the web page
   const $ = cheerio.load(html)
   // Empty array to store product data
   const products = []

   // Iterate over the search result items
   $('.s-result-item').each((index, element) => {
    const title = $(element).find('h2 span').text().trim()
    const rating = $(element)
     .find('.a-icon-star-small .a-icon-alt')
     .text()
     .trim()
    const numReviews = $(element)
     .find('.a-size-small .a-link-normal')
     .text()
     .trim()
    const imageUrl = $(element).find('img').attr('src')

    // Add product details to the products array
    products.push({ title, rating, numReviews, imageUrl })
   })

   // Return the product data in JSON format
   res.json(products)
  } else {
   // Return an error message if the request was not successful
   res.status(500).json({ error: `Error accessing the page` })
  }
 } catch (error) {
  // Return an error response in case of scraping failure
  res.status(500).json({ error: 'Error scraping the page' })
 }
})

// Start the server on port 3000 and display a message in the console
app.listen(PORT, () => {
 console.log(`Server started on port ${PORT}`)
})
