<script>
  import { fade } from 'svelte/transition'
  import Router, { location } from 'svelte-spa-router'
  // import routes from '~/routes/index.js'
  import routes from '~/routes'
  import Header from '~/components/Header.svelte'
  import Footer from '~/components/Footer.svelte'
  console.log($location)
</script>

<Header />
{#key $location}
  <div in:fade>
    <Router
      {routes}
      restoreScrollState={true} />
  </div>
{/key}
<Footer />
