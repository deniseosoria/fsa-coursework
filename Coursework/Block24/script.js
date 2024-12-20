const API_URL = "https://catfact.ninja/";

const state = {
  fact: {},
  breeds: [],
};

const $catFactContainer = document.getElementById("cat-fact-container");
const $catBreedsContainer = document.getElementById("cat-breeds-container");

//Fetches a random fact from the /fact endpoint
// and updates the fact object in state
//then re-renders the UI
async function getFact() {
  try {
    const promise = await fetch(API_URL + "fact");
    if(!promise.ok){
        throw new Error("Failed to fetch fact")
    }
    const response = await promise.json();
    if (!response.success) {
      throw new Error("Failed to fetch fact!");
      
    }
    console.log(response.data.fact);
    state.fact = response.data;
  } catch (error) {
    alert("Unable to load facts.");
  }
  //render();
}

//Fetches breeds from the /breeds endpoint
// and updates the breeds array in state
//then re-renders the UI
async function getBreeds() {
  try {
    const promise = await fetch(`${API_URL}/breeds`);
    const response = await promise.json();
    if (!response.success) {
      throw new Error("Failed to fetch breeds!");
      
    }
    console.log(response.data);
    state.breeds = response.data;
  } catch (error) {
    alert("Unable to load breeds.");
  }
  render();
}

//Adds the HTML elements needed to the DOM
// with data from the javascript state
function render() {
  //TODO:  A button and a <p> element to the catFactContainer
  const button = document.createElement("button");
  $catFactContainer.appendChild(button)
  button.textContent = ("Fact")
  button.style.display = ("block")
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const p = document.createElement("p");
    p.textContent = getFact();
    $catFactContainer.appendChild(p);
    
  });

  //TODO:  Divs for each cat breed type, display the Breed, country, coat and pattern
}


getFact()
//render()