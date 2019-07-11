<template>
  <div class="area">
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
export default {
  props: ["mode", "area"],
  data() {
    return {
      isLoading: true,
      isFullPage: true,
      areaData:null
    };
  },
  beforeMount() {
    let url = `../data/${this.mode}/${this.area}.json`;
    fetch(url)
      .then(function(response) {
          return response.text();
      }).then(res => {
        this.areaData = JSON.parse(res)
        this.isLoading = false
      }).catch(res => {
        this.$router.replace({
          name:"blank"
        })
      })
  }
};
</script>
