let container = document.getElementById('js_container');

let btnPreviusPage = document.getElementById('nextPrevius');
let btnNextPage = document.getElementById('nextPage');

let currentPage = 1 // Pagina actual

function init(currentPage) {
  fetch(`https://swapi.co/api/people/?page=${currentPage}`)
  .then(function(response) {
    return response.json();
  }).then(function(users){
    users.results.forEach(user => {
      insertCard(createCard(user))
    })
  })
}

function createCard(user) {
  const { 
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = user;

  const card = document.createElement('article');
  card.innerHTML = `
    <h1>${name}</h1>
    <p>Altura: ${height}</p>
    <p>Peso: ${mass}</p>
    <p>Color de cabello: ${hair_color}</p>
    <p>Color de piel: ${skin_color}</p>
    <p>Color de ojos: ${eye_color}</p>
    <p>Compleaño: ${birth_year}</p>
    <p>Genero: ${gender}</p>
    `;
    
    return card;
}
  
function insertCard(card) {
  container.appendChild(card)
}
  
function clearPage() {
  while(container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function nextPage() {
  currentPage++
  clearPage()
  init(currentPage)
}

function previusPage() {
  currentPage--
  clearPage()
  init(currentPage)
}

init(currentPage)

btnNextPage.addEventListener('click', () => nextPage())
btnPreviusPage.addEventListener('click', () => previusPage())
