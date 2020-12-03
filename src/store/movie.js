import axios from 'axios'
import _unionBy from 'lodash/unionBy'
import { writable, get } from 'svelte/store'

export const movies = writable([])
export const message = writable('Search for the movie title!')
export const loading = writable(false)
export const theMovie = writable({})

export function initMovies() {
  movies.set([])
  message.set('Search for the movie title!')
  loading.set(false)
}
export async function searchMovies(payload) {
  if (get(loading)) return
  loading.set(true)
  message.set('')
  let total = 0

  try {
    // const res = await _fetchMovie({
    //   ...payload,
    //   page: 1
    // })
    const res = await axios.post('/.netlify/functions/movie', {
      ...payload,
      page: 1
    })
    // `Search`는 검색된 영화 정보입니다.
    // `totalResults`는 검색 가능한 영화의 총 개수입니다.
    const { Search, totalResults } = res.data
    console.log(totalResults)
    movies.set(Search)
    total = parseInt(totalResults, 10) // 문자에서 숫자로 변환.
  } catch (msg) {
    // 에러가 발생하면,
    // 데이터 초기화.
    movies.set([])
    message.set(msg)
    loading.set(false)
    // 더 이상 요청하지 않도록 함수 종료.
    return
  }

  // 추가 요청..
  // ceil = 올림!
  const pageLength = Math.ceil(total / 10)

  if (pageLength > 1) {
    for (let page = 2; page <= pageLength; page += 1) {
      if (page > (payload.number / 10)) break
      const res = await axios.post('/.netlify/functions/movie', {
        ...payload,
        page
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
  const { title, type, year, page, id } = payload
  const OMDB_API_KEY = '7035c60c'

  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

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
