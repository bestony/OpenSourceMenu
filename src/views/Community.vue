<template>
  <div class="community">
    <div class="content">
      <div class="container">
        <h1 class="is-size-2">Community</h1>
        <p
          class="is-size-4"
        >OpenSource Community is a Community who work for OpenSource Project or Other Things About Opensource.</p>

        <div class="columns">
          <div class="column is-4" v-for="item in areaList" v-bind:key="item.path">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">{{item.name}}</p>
              </header>
              <footer class="card-footer">
                <router-link :to="item.path" class="card-footer-item">View</router-link>
                <a href="https://github.com/bestony/opensourcelists.com/wiki/Add-new-Community-or-Company" target="_blank" class="card-footer-item">Add My Community</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      areaList: [
        {
          name: "Taiwan",
          path: "/community/tw"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.content {
  margin: 50px 0px;
}
</style>
