<template>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body has-text-centered">
      <div class="container">
        <h1 class="title">Submit Your Local Opensource Community or Opensource Company</h1>

        <div >
            <b-button type="is-light" size="is-large" @click="addPage">😋 Click here to see tutorials</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods:{
    addPage() {
      window.location="https://github.com/bestony/OpenSourceMenu/tree/master/docs"
    }
  }
}
</script>
