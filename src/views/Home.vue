<template>
  <div class="home">
    <section class="hero is-info is-medium has-text-centered hero-content">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">Opensource Lists</h1>
          
          <h2 class="subtitle">a website to find opensource community or opensource company</h2>
          <b-button type="is-light" class="is-size-4" outlined>Find By Your Location</b-button>
        </div>
      </div>
    </section>
    <section>
      <div class="container info-content">
        <h1 class="is-size-1 has-text-weight-semibold">Opensource Lists</h1>
        <p
          class="is-size-3"
        >Opensource Lists ia a Website to find Your Local Opensource community or opensource Company</p>
      </div>
    </section>
    <section class="count-content has-background-primary">
      <div class="container">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Country and Area</p>
              <p class="title">4</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Community</p>
              <p class="title">1</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Company</p>
              <p class="title">2</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Contributor</p>
              <p class="title">1</p>
            </div>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped>
.hero-content{
  .title{
    margin-bottom: 50px;
  }
}
.info-content {
  padding: 50px 0px;
}
.count-content {
  padding: 50px 0px;
}
</style>
