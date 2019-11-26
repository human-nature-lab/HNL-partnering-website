<template>
  <nav class="navigation flex justify-between flex-wrap">
    <div class="logo" :style="{backgroundImage: `url(${logo})`}"></div>
    <div class="link" v-for="link in links">
      <l :to="link.url" :external="link.external" dark class="uppercase">
        {{link.text}}
      </l>
    </div>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Navigation',
    data () {
      return require('../../data/Navigation.json')
    }
  })
</script>

<style lang="sass">
  $m: 1em
  .logo
    margin: $m
    width: 5em
    height: 2em
    background-repeat: no-repeat
  .link
    padding: 0.5em 0.7em
    font-weight: 100
    letter-spacing: 1px
    font-size: .85rem
    margin: $m
  .navigation
    background: rgba(0, 0, 0, 0.8)
</style>