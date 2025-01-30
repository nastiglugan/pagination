// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
import axios from 'axios';

const BREARER_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWIwZDgyZjllYWE2YTg0OWM3MGM2OGFiYzUyZDQwNyIsIm5iZiI6MTY3NjU3MzQ1Ni4zMiwic3ViIjoiNjNlZTdiMTA3Y2ZmZGEwMGNkMWQzZjczIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Lbm70aEEvFshDp3TW9cuxNXUtzdG0E0ucToF-sN8BcI';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';

const searchParams = new URLSearchParams({
  include_adult: false,
  include_video: false,
  language: 'en - US',
  //   page: 1,
  sort_by: 'popularity.desc',
});

const option = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${BREARER_TOKEN}`,
  },
};

async function fetchMovie(page = 1) {
  const resp = await axios.get(
    `${BASE_URL}?${searchParams}&page=${page}`,
    option
  );
  return resp.data;
}

export { fetchMovie };
