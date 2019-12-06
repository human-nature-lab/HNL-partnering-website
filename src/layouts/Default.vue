<template>
  <div class="layout">
    <header class="header">
      <Navigation />
    </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
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
  .header
    margin-bottom: 80px
  
  .fade-enter
    opacity: 0
  .fade-enter-active
    transition: opacity .5s
    
</style>