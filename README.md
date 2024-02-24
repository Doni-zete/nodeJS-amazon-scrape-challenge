## Full Stack Developer Challenge
Objective: Create a simple script to extract Amazon product listings from the first page of search results for a given keyword.

The requirements necessary for delivery are:

**Backend/API (Node.js):**

Set up a Node.js project with the necessary dependencies (express, axios, cheerio, etc.).
Write a script using axios to fetch content from the Amazon search results page for a given keyword.
Use cheerio to parse HTML content and extract the following details for each product listing on the first page:
Product title
Rating (stars out of five)
Number of reviews
Product image URL
Create an /api/scrape endpoint where a GET request with a ?keyword=yourKeyword query parameter starts the scraping process and returns the extracted data in JSON format.

**Front-end (HTML, CSS, JavaScript):**

Develop a simple web page: 
With an input field to enter the search keyword.
One button to start the scraping process.
Style the web page to be user-friendly and presentable.
Implement JavaScript to make an AJAX call to the backend endpoint when the button is clicked and display the cleanly formatted results on the page.

**Documentation:**
Provide comments in your code to provide clarity about your logic and process.

Include a README.md file with setup and execution instructions

Considerations:
Make sure you handle errors gracefully on both the backend and frontend.
Provide clear instructions on how to run the application.

### Stack used

**Front-end:** Html, Css e JavaScript.

**Back-end:** Node, Express, cheerio, axios e nodemon.

**IDE:** VsCode


## Running locally

**Clone the project**

```bash
  git clone https://github.com/Doni-zete/nodeJS-amazon-scrape-challenge.git
```


Enter the tera project directory for a back and a front, perform the steps below in the terminal:

```bash
  cd nodeJS-amazon-scrape-challenge
```
**Install dependencies**

```bash
  npm install
```


After executing the above commands


Start the server to the back. Remember to be inside the folder using the command:

```bash
cd nodeJS-amazon-scrape-challenge
```
**Start the server**
```bash
  npm run start
```

If everything went well, the message below will appear.

![App Screenshot](https://blogger.googleusercontent.com/img/a/AVvXsEgQq1CULe2KvoMOvCuH-1CBNkkNxu-An8ad6tnAJc4eIOH1aZ-3ZuGZE_5oLb3bjFKK44DG96K31BvtLxHBnqwZ_bZ3f4B4bMrkCOrq3bXL0P4E3QzVMxTHQwMZZwouFdwZy4Z1Zm36It4CQs259GTHX2zncpMzCy-pRamoSiug8H0yDN6HPr6i-K4oHzw=w566-h260)



**Running the FrontEnd**

Two options to execute the front.

**1° option** is to install the live Server extension in VsCode

![App Screenshot](https://blogger.googleusercontent.com/img/a/AVvXsEgjLO2gC9zYdjrx2rNYffL5ph7U8NKssWZ9s_czAWgagps0YJpfKXMdiNDHXQZu06hAwGot0JzIkJkg9mxZDEsL8cP9LioTn5P2Ud1Uwq2R5U4QIqVOBwL4uVy69BIr6Skz3Uiz-fZYcS56CdwVqipU1xzFDvQpPsbxpZ_Oe-aTgCDWLk6QYDWXqYFxhmo=w388-h403)

After installing the live server.

Open the front folder, right-click on the **index.html** file.

And select the first option **Open with Live Server**

![App Screenshot](https://blogger.googleusercontent.com/img/a/AVvXsEjNdiQoPkNjw8qNJpIzKhNiLH_Aqs5_JiimVfhpuq1pymv5D_QgxFLyF3JdvCTXT2lTbp72fnQlJ3n2-_hc45BAKQ8c__jSNS5yuSXnuerCLFx-m30wDJfwImAnEkUKE7XUeoJ7JaXMzZgZuanwQRYiUc8N-GV5m_OwNUKq4phXFd1LXx0wL5PcPoRls98)


A page opens in a tab on your browser.


![App Screenshot](https://blogger.googleusercontent.com/img/a/AVvXsEjIWXmfqHGPhFMxupxYKOBO9AwfXoXttrBBeEzTe-uEarHEbdeWnHC07tdhdC3Klf5ysg57Ci2vsYzJUhnIL9120bdgw0EES7dCsZyHMBF0cFGxU9wzeFtz7Pn7-0vKJzF7E_M5l7AThwc7HmRiAbGG3sK9x8gyzAHL34SYAXFltOghgrdN5OAcmwYt_Ow=w623-h314)


**2° option**
Go into the **front** folder, right-click on it, and choose open with browser.


![App Screenshot](https://blogger.googleusercontent.com/img/a/AVvXsEhFc0IpjQ1nSomlVZ6GrPhC9pXGbXzb_HPhHW_WWTPpGvWnHssBKTddi_R1_i9jh5ldgDQtW-0LUfq26Jr0KiisK59G0k4WVhxeDMLlRLF_d86qb4VEpKGyDu_M4n6T_6JY7tfZDe8UPz9RtyBctLTnzA0K1I3RjWEkaw6f2gtbBJLZ2GtIh27u7y8whT8=w416-h350
)

It will open successfully without having to install an extension

![App Screenshot](https://blogger.googleusercontent.com/img/a/AVvXsEjIWXmfqHGPhFMxupxYKOBO9AwfXoXttrBBeEzTe-uEarHEbdeWnHC07tdhdC3Klf5ysg57Ci2vsYzJUhnIL9120bdgw0EES7dCsZyHMBF0cFGxU9wzeFtz7Pn7-0vKJzF7E_M5l7AThwc7HmRiAbGG3sK9x8gyzAHL34SYAXFltOghgrdN5OAcmwYt_Ow=w623-h314)









## Feedback

If you have any feedback, please let me know via donizetecrisostomo.b@gmail.com
