import Home from '~/pages/Home.svelte'
import Movie from '~/pages/Movie.svelte'
import About from '~/pages/About.svelte'
import NotFound from '~/pages/NotFound.svelte'

export default {
  '/': Home,
  '/movie/:id': Movie,
  '/about': About,
  '*': NotFound
}
