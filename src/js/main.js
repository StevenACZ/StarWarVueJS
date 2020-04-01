/*let container = document.getElementById('js_container');

let btnPreviusPage = document.getElementById('nextPrevius');
let btnNextPage = document.getElementById('nextPage');

let currentPage = 1 // Pagina actual




init(currentPage)

btnNextPage.addEventListener('click', () => nextPage())
btnPreviusPage.addEventListener('click', () => previusPage())*/

let vue = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  methods: {
    drawPage() {
      for (let i = 0; i < 10; i++) {
        fetch(`https://swapi.co/api/people/?page=${i}`)
        .then((response) => {
          return response.json();
        }).then((users) => {
          users.results.forEach(user => {
            this.insertCard(this.createCard(user))
          })
        })
      }
    },
    createCard(user) {
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
      card.classList.add('card')
      card.innerHTML = `
        <h1 class="card__title">${name}</h1>
        <p>Altura: ${height} cm</p>
        <p>Peso: ${mass} kg</p>
        <p>Color de cabello: ${hair_color}</p>
        <p>Color de piel: ${skin_color}</p>
        <p>Color de ojos: ${eye_color}</p>
        <p>Compleaño: ${birth_year}</p>
        <p>Genero: ${gender}</p>
        `;
        
        return card;
    },
    insertCard(card) {
      let cardContainer = document.querySelector('.cardContainer')
      cardContainer.appendChild(card)
    }
  }
})
