<template>
  <div class="layout">
    <header class="header">
      <Navigation />
    </header>
    <slot/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Navigation from '../components/Navigation.vue'

  export default Vue.extend({
    name: 'Default',
    components: { Navigation }
  })
</script>

<style lang="sass">
  .header
    margin-bottom: 100px
</style>