<template>
  <div class="area-item">
    <h2 class="is-size-2 is-uppercase">{{this.area.flag}} {{this.area.lang[langCode]}}</h2>
    <hr />
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-3 is-narrow" v-for="item in this.area.items" v-bind:key="item.id">
          <div class="card">
            <div class="card-image">
              <figure class="image is-16by9">
                <img :src="item.image" :alt="item.lang[langCode].name" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{item.lang[langCode].name}}</p>
                </div>
              </div>
              <div class="content">{{item.lang[langCode].desc}}</div>
            </div>
            <footer class="card-footer">
              <a :href="item.homepage" target="_blank" class="card-footer-item" v-show="item.homepage">
                <b-icon icon="home" size="is-small"></b-icon>
              </a>
              <a :href="item.email" target="_blank" class="card-footer-item" v-show="item.email">
                <b-icon icon="email" size="is-small"></b-icon>
              </a>

              <a :href="item.github" target="_blank" class="card-footer-item" v-show="item.github">
                <b-icon icon="github-circle" size="is-small"></b-icon>
              </a>
              <a :href="item.twitter" target="_blank" class="card-footer-item" v-show="item.twitter">
                <b-icon icon="twitter" size="is-small"></b-icon>
              </a>
              <a :href="item.meetup" target="_blank" class="card-footer-item" v-show="item.meetup">
                <b-icon icon="meetup" size="is-small"></b-icon>
              </a>
              <a :href="item.facebook" target="_blank" class="card-footer-item" v-show="item.facebook">
                <b-icon icon="facebook-box" size="is-small"></b-icon>
              </a>
              <a :href="item.googlegroup" target="_blank" class="card-footer-item" v-show="item.googlegroup">
                <b-icon icon="google-circles-group" size="is-small"></b-icon>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    area: Object
  },
  computed: {
    langCode() {
      return this.$store.state.lang;
    }
  }
};
</script>

<style lang="scss" scoped>
.area-item{
  margin-bottom: 40px;
}
</style>
