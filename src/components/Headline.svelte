<div class="headline">
  <h1>
    <span>OMDb API</span><br />
    THE OPEN<br />
    MOVIES DATABASE
  </h1>
  <div class="description">
    <p>
      The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
    </p>
    <p>
      If you find this service useful, please consider making a one-time donation or become a patron.
    </p>
  </div>
</div>

<style lang="scss">
  .headline {
    h1 {
      line-height: 1;
      font-family: 'Oswald', sans-serif;
      font-size: 80px;
      @media #{$mobile} {
        font-size: 60px;
      }
      span {
        color: $color--primary;
      }
    }
    .description {
      margin: 30px 0;
      color: $color--white-30;
    }
  }
</style>
