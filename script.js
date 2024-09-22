// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
async function fetchWithPromiseAll(urls) {
  const start = performance.now();
  
  await Promise.all(urls.map(url => fetch(url)));
  
  const end = performance.now();
  return end - start; // Time taken in milliseconds
}

// Function to fetch data using Promise.any
async function fetchWithPromiseAny(urls) {
  const start = performance.now();

  await Promise.any(urls.map(url => fetch(url)));
  
  const end = performance.now();
  return end - start; // Time taken in milliseconds
}

// Function to display the results in the table
async function displayResults() {
  // Measure time for Promise.all
  const promiseAllTime = await fetchWithPromiseAll(apiUrls);
  document.getElementById('output-all').innerText = `${promiseAllTime.toFixed(2)} ms`;

  // Measure time for Promise.any
  const promiseAnyTime = await fetchWithPromiseAny(apiUrls);
  document.getElementById('output-any').innerText = `${promiseAnyTime.toFixed(2)} ms`;
}

// Trigger the display of results when the page loads
window.onload = displayResults;
