<template>
  <div id="app">
      <PageHeader></PageHeader>
      <router-view></router-view>
      <PageJoin></PageJoin>
      <PageFooter></PageFooter>
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
import PageFooter from '@/components/PageFooter.vue'
import PageJoin from "@/components/PageJoin.vue"
export default {
  components:{
    PageHeader,PageFooter,PageJoin
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
