function updateCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input"); //1st
  let cityElement = document.querySelector("#city"); //3rd
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form"); ///2nd
searchFormElement.addEventListener("submit", updateCity);
