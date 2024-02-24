// Add an event listener for the click event on the search button
document.getElementById('searchButton').addEventListener('click', async () => {
 // Get the value of the input field
 const keyword = document.getElementById('searchInput').value

 // Check if the input field is empty
 if (keyword.trim() === '') {
  // If it's empty, show an alert
  alert('Please enter a search keyword.')
  return // Stop the code execution
 }

 try {
  // Make the request to the API only if the input field is not empty
  const response = await fetch(
   `http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`
  )
  // Check if the response is successful
  if (!response.ok) {
   // If not, throw an error
   throw new Error('Error fetching data from the API')
  }
  // Convert the response to JSON
  const data = await response.json()
  // Log the received data to the console
  console.log('Data received from the API:', data)
  // Display the results on the interface
  displayResults(data)
 } catch (error) {
  // Display an error message if there is any problem during the API request
  console.error('Error fetching data from the API:', error)
 }
})

// Function to display the results on the interface
function displayResults(data) {
 // Get the HTML element where the results will be displayed
 const resultsDiv = document.getElementById('results')
 // Clear the previous content
 resultsDiv.innerHTML = ''

 // Iterate over the products received from the API
 data.forEach((product) => {
  // Create a new div element for each product
  const container = document.createElement('div')
  // Add the 'product' class to the div element
  container.classList.add('product')

  // Create an image element to display the product image
  const image = document.createElement('img')
  // Set the image source to the product URL
  image.src = product.imageUrl
  // Set the alt attribute of the image
  image.alt = 'Product Image'

  // Append the image to the container
  container.appendChild(image)

  // Create an h2 element to display the product title
  const title = document.createElement('h2')
  // Set the title text to the product title
  title.textContent = product.title
  // Append the title to the container
  container.appendChild(title)

  // Create a p element to display the product rating
  const rating = document.createElement('p')
  // Set the rating text to the product rating
  rating.textContent = `Rating: ${product.rating}`
  // Append the rating to the container
  container.appendChild(rating)

  // Create a p element to display the number of reviews for the product
  const numReviews = document.createElement('p')
  // Set the text of the number of reviews to the product's number of reviews
  numReviews.textContent = `Number of Reviews: ${product.numReviews}`
  // Append the number of reviews to the container
  container.appendChild(numReviews)

  // Append the product container to the results element
  resultsDiv.appendChild(container)
 })
}
