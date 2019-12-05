<template>
  <div class="layout">
    <header class="header">
      <Navigation />
    </header>
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Navigation from '../components/Navigation.vue'
  import Footer from '../components/Footer.vue'

  export default Vue.extend({
    name: 'Default',
    components: { Navigation, Footer }
  })
</script>

<style lang="sass">
  .layout
    // background-image: url('../../assets/textures/random-2.png')
    // background-repeat: repeat
  .header
    margin-bottom: 80px
</style>