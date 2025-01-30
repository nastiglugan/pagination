import { fetchMovie } from './fetch';

const movieList = document.querySelector('.movie_list');
const target = document.querySelector('.js-guard');

let options = {
  root: null,
  rootMargin: '200px',
  threshold: 1.0,
};

let currentPage = 1;
let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      fetchMovie(currentPage)
        .then(data => {
          movieList.insertAdjacentHTML('beforeend', moviesMarkup(data.results));
          if (data.page === data.total_pages) {
            observer.unobserve(target);
          }
        })
        .catch(err => console.log(err));
    }
  });
}

fetchMovie()
  .then(data => {
    movieList.insertAdjacentHTML('beforeend', moviesMarkup(data.results));
    observer.observe(target);
  })
  .catch(err => console.log(err));

function moviesMarkup(moviesArr) {
  return moviesArr
    .map(
      ({ original_title, poster_path }) => `<li>
     <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
     <h2>${original_title}</h2>
     </li>`
    )
    .join('');
}
