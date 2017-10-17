import apiKeys from '../apiKeys'

const fetchCurrentMovies = () => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKeys.lukeApi}&language=en-US&page=1`)
      .then(fetchedData => fetchedData.json())
      .then(whoDis => console.log(whoDis))
}

module.exports = { fetchCurrentMovies }
