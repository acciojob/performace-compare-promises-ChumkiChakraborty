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
async function measurePromiseAll(urls) {
  const start = Date.now(); // Start time
  await Promise.all(urls.map(url => fetch(url)));
  return Date.now() - start; // End time - Start time = Total time in ms
}

// Function to measure the time taken by Promise.any
async function measurePromiseAny(urls) {
  const start = Date.now(); // Start time
  await Promise.any(urls.map(url => fetch(url)));
  return Date.now() - start; // End time - Start time = Total time in ms
}

// Function to update the table with the results
async function displayTimes() {
  const timeAll = await measurePromiseAll(apiUrls);
  document.getElementById('output-all').textContent = `${timeAll} ms`;

  const timeAny = await measurePromiseAny(apiUrls);
  document.getElementById('output-any').textContent = `${timeAny} ms`;
}

// Trigger the measurements and display when the page loads
window.onload = displayTimes;
