<script>
  import Headline from '~/components/Headline.svelte'
  import Search from '~/components/Search.svelte'
  import MovieList from '~/components/MovieList.svelte'
  import { initMovies } from '~/store/movie'

  initMovies()
</script>

<div class="container">
  <Headline />
  <Search />
  <MovieList />
</div>

<!-- 다음 코드가 없으면 main.scss 파일의 `.container` 선언에 대한 스타일이 적용되지 않습니다. -->
<style lang="scss"></style>
