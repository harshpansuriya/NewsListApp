// api url
const api_url = "http://localhost:8000/news";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab = ``;

  // Loop to access all rows
  for (let r of data) {
    tab += `<div class="m-5 p-5 border-b-4">
        <h1 class="text-2xl">${r.title} </h1>
        <a target="_blank" href=${r.url} class="hover:underline">${r.url}</a>
        <p>Source: ${r.source}</p>
    </div>
`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}
