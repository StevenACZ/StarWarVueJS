let vue = new Vue({
  el: '#app',
  data: {
  },
  methods: {
    drawPeople() {
      this.clearCards();
      fetch(`https://swapi.co/api/people`).
      then((responde) => {
        return responde.json();
      }).then((people) => {
        for (let i = 1; i < people.count; i++) {
          fetch(`https://swapi.co/api/people/${i}`)
          .then((response) => {
            return response.json();
          }).then((people) => {
              this.insertCard(this.createCardPeople(people))
          })
        }
      })
    },
    drawFilm() {
      this.clearCards();
      fetch(`https://swapi.co/api/films`).
      then((responde) => {
        return responde.json();
      }).then((films) => {
        for (let i = 1; i <= films.count; i++) {
          fetch(`https://swapi.co/api/films/${i}`)
          .then((response) => {
            return response.json();
          }).then((film) => {
              this.insertCard(this.createCardFilm(film))
          })
        }
      })
    },
    drawPlanet() {
      this.clearCards();
      fetch(`https://swapi.co/api/planets`).
      then((responde) => {
        return responde.json();
      }).then((planet) => {
        for (let i = 1; i <= planet.count; i++) {
          fetch(`https://swapi.co/api/planets/${i}`)
          .then((response) => {
            return response.json();
          }).then((planet) => {
              this.insertCard(this.createCardPlanet(planet))
          })
        }
      })
    },
    createCardPeople(people) {
      const { 
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
      } = people;

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
    createCardFilm(film) {
      const { 
        title,
        director,
        producer,
        release_date,
      } = film;

      const card = document.createElement('article');
      card.classList.add('card')
      card.innerHTML = `
        <h1 class="card__title">${title}</h1>
        <p>Director: ${director} cm</p>
        <p>Productor: ${producer} kg</p>
        <p>Fecha de lanzamiento: ${release_date}</p>
        `;
        
      return card;
    },
    createCardPlanet(planet) {
      const { 
        name,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water,
        population,
      } = planet;

      const card = document.createElement('article');
      card.classList.add('card')
      card.innerHTML = `
        <h1 class="card__title">${name}</h1>
        <p>Rotacion: ${rotation_period} cm</p>
        <p>Orbita: ${orbital_period} kg</p>
        <p>Diametro: ${diameter}</p>
        <p>Clima: ${climate}</p>
        <p>Gravedad: ${gravity}</p>
        <p>Terreno: ${terrain}</p>
        <p>Tipo de agua: ${surface_water}</p>
        <p>Población: ${population}</p>
        `;
        
      return card;
    },
    insertCard(card) {
      let cardContainer = document.querySelector('.cardContainer')
      cardContainer.appendChild(card)
    },
    clearCards() {
      let cardContainer = document.querySelector('.cardContainer')
      while(cardContainer.hasChildNodes()) {
        cardContainer.removeChild(cardContainer.firstChild);	
      }
    }
  }
})
