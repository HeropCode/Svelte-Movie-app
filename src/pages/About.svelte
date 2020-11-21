<script>
  import { querystring } from 'svelte-spa-router'
  import qs from 'qs'

  $: query = qs.parse($querystring)
  $: name = query.name || 'Heropy'
  $: email = query.email || 'thesecon@gmail.com'
  $: blog = query.blog || 'https://heropy.blog'
  $: phone = query.phone || '+82-10-1234-5678'
</script>

<div class="user-profile">
  <div class="photos">
    <div class="photo">
      <img src="/assets/svelte.png" alt="User">
    </div>
    <div class="photo">
      <img src="https://heropy.blog/css/images/logo.png" alt="User">
    </div>
  </div>
  <div class="details">
    {#key query}
      <div class="name">{name}</div>
      <div class="email">{email}</div>
      <div class="blog">{blog}</div>
      <div class="phone">{phone}</div>
    {/key}
  </div>
</div>

<style lang="scss">
  .user-profile {
    padding: 80px 0;
  }
  .photos {
    display: flex;
    justify-content: center;
    .photo {
      flex-shrink: 0;
      width: 230px;
      height: 230px;
      padding: 30px;
      box-sizing: border-box;
      background-color: $color--area;
      border-radius: 50%;
      display: flex;
      border: 12px solid $color--black;
      justify-content: center;
      align-items: center;
      &:first-child {
        margin-right: -80px;
      }
      img {
        width: 100%;
      }
    }
  }
  .details {
    margin-top: 20px;
    text-align: center;
    .name {
      font-size: 40px;
      font-family: 'Oswald', sans-serif;
      margin-bottom: 20px;
    }
  }
</style>
