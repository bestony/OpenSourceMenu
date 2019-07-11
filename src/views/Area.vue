<template>
  <div class="area">
    <div class="body">
      <div class="container">
        <h1 class="is-size-1 is-uppercase">{{areaData.flag}} {{areaData.lang[lang]}}</h1>
        <hr>
        <AreaItem v-for="item in areaData.areas" v-bind:key="item.id" :area="item"></AreaItem>
      </div>
    </div>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
import AreaItem from '@/components/area/Area.vue';
export default {
  props: ["mode", "area"],
  components:{
    AreaItem
  },
  data() {
    return {
      isLoading: true,
      isFullPage: true,
      areaData: null
    };
  },
  beforeMount() {
    let url = `../data/${this.mode}/${this.area}.json`;
    fetch(url)
      .then(function(response) {
        return response.text();
      })
      .then(res => {
        this.areaData = JSON.parse(res);
        this.isLoading = false;
      })
      .catch(() => {
        this.$router.replace({
          name: "blank"
        });
      });
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  }
};
</script>

<style lang="scss" scoped>
.body{
  margin:50px 0px; 
}
</style>
