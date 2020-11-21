import axios from 'axios'
import _unionBy from 'lodash/unionBy'
import { writable, get } from 'svelte/store'

export const movies = writable([])
export const total = writable(0)
export const message = writable('Search for the movie title!')
export const loading = writable(false)
export const theMovie = writable({})

export async function searchMovies(payload) {
  if (get(loading)) return
  loading.set(true)
  message.set('')

  try {
    // const res = await _fetchMovie({
    //   ...payload,
    //   page: 1
    // })
    const res = await axios.post('/.netlify/functions/movie', {
      ...payload,
      page: 1
    })
    const { Search, totalResults } = res.data
    movies.set(Search)
    total.set(totalResults)
  } catch (msg) {
    // 에러가 발생하면,
    // 데이터 초기화.
    movies.set([])
    total.set(0)
    message.set(msg)
    loading.set(false)
    // 더 이상 요청하지 않도록 함수 종료.
    return
  }

  // 추가 요청..
  const pageLength = Math.ceil(get(total) / 10)

  if (pageLength > 1) {
    for (let i = 2; i < pageLength; i += 1) {
      if (i > (payload.number / 10)) break
      const res = await axios.post('/.netlify/functions/movie', {
        ...payload,
        page: i
      })
      const { Search } = res.data
      movies.update($movies => _unionBy($movies, Search, 'imdbID'))
    }
  }

  loading.set(false)
}

export async function searchMovieWithId(id) {
  if (get(loading)) return
  loading.set(true)

  // const res = await _fetchMovie({
  //   id
  // })
  const res = await axios.post('/.netlify/functions/movie', {
    id
  })
  theMovie.set(res.data)
  loading.set(false)
}

function _fetchMovie(payload) {
  const { text, type, year, page, id } = payload
  const OMDB_API_KEY = '7035c60c'

  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${text}&type=${type}&y=${year}&page=${page}`

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(url)
      console.log(res.data)
      if (res.data.Error) {
        reject(res.data.Error)
      }
      resolve(res)
    } catch (error) {
      console.log(error.response.status)
      reject(error.message)
    }
  })
}
