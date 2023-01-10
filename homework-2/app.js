const movie1 = {
  watched: false,
  name: "The Shawshank Redemption",
  year: 1994,
  country: "USA",
  description:
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
};
const movie2 = {
  watched: false,
  name: "The Godfather",
  year: 1972,
  country: "USA",
  description:
    "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  actors: ["Marlon Brando", "Al Pacino", "James Caan"],
};

const movie3 = {
  watched: false,
  name: "Lord of The Rings",
  year: 2001,
  country: "USA",
  description:
    "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
  actors: ["Elijah Wood", "Cate Blanchett", "Viggo Mortensen"],
};

const movies = [movie1, movie2, movie3];
const movieTableBody = document.querySelector("#movie-table tbody");

function addMoviesToTable(movies) {
  movies.forEach(function (movie) {
    // create a table row
    const movieRow = document.createElement("tr");
    if (movie.watched) {
      movieRow.classList.add("table-success");
    } else {
      movieRow.classList.add("table-danger");
    }

    // create table data elements and append them to the row
    const watchedCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = movie.watched;
    checkbox.classList.add("form-check-input");
    watchedCell.appendChild(checkbox);
    movieRow.appendChild(watchedCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = movie.name;
    movieRow.appendChild(nameCell);

    const yearCell = document.createElement("td");
    yearCell.textContent = movie.year;
    movieRow.appendChild(yearCell);

    const countryCell = document.createElement("td");
    countryCell.textContent = movie.country;
    movieRow.appendChild(countryCell);

    const descCell = document.createElement("td");
    descCell.textContent = movie.description;
    movieRow.appendChild(descCell);

    const actorsCell = document.createElement("td");
    actorsCell.textContent = movie.actors.join(", ");
    movieRow.appendChild(actorsCell);

    // append the row to the table body
    movieTableBody.appendChild(movieRow);
  });
}

addMoviesToTable(movies);

const addMovieButton = document.getElementById("add-movie-button");
const addMovieModal = document.getElementById("add-movie-modal");
const closeButton = document.querySelector(".btn-close");
const addMovieForm = document.getElementById("add-movie-form");
const saveMovieButton = document.getElementById("save-movie-button");

// Show the modal when the add movie button is clicked
addMovieButton.addEventListener("click", function () {
  addMovieModal.style.display = "block";
});

// Hide the modal when the close button is clicked
closeButton.addEventListener("click", function () {
  addMovieModal.style.display = "none";
});

// Hide the modal when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target === addMovieModal) {
    addMovieModal.style.display = "none";
  }
});
