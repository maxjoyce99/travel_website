var available_destinations = [];

async function fetchLocations() {
    console.log("Ran fetch");
    const response = await fetch("./travel_recommendations_api.json");
    const destinations = await response.json();
    available_destinations = destinations;
    console.log(available_destinations);
}

function submitSearch () {
    console.log("Searching");
    var searchString = document.getElementById("search_bar").value.toLowerCase();
    var searchResults = "";
    if(searchString == "beach" || searchString == "beaches"){
        searchResults = available_destinations.beaches;
        console.log(searchResults);
        displayPlaces(searchResults);
    }
    if(searchString == "temple" || searchString == "temples"){
        searchResults = available_destinations.temples;
        console.log(searchResults);
        displayPlaces(searchResults);
    }
    if(searchString == "country" || searchString == "countries"){
        searchResults = available_destinations.countries;
        console.log(searchResults);
        displayCountries(searchResults);
    }

    
}

function displayPlaces (results) {
    var resultDiv = document.getElementById('results');
    resultDiv.innerHTML = "";
    results.forEach((place) => resultDiv.innerHTML += `<h3>${place.name}</h3> <br>
    <p>${place.description}</p> 
    <img src="./images/${place.imageUrl}"></img>`);
}

function displayCountries (results) {
    var resultDiv = document.getElementById('results');
    resultDiv.innerHTML = "";

    for(var i =0; i < results.length -1; i++){
        resultDiv.innerHTML += `<h3>${results[i].name}</h3> <br>
        <h5>Cities:</h5>`;
        results[i].cities.forEach((city) => 
        
        resultDiv.innerHTML += `<p>${city.name}</p> 
        <p>${city.description}</p>
        <img src="./images/${city.imageUrl}"></img>`);
   }
}



window.onload(fetchLocations());