<template>
  <nav class="navigation flex justify-between flex-wrap">
    <div class="logo" :style="{backgroundImage: `url(${logo})`}"></div>
    <div class="link" v-for="link in links" :key="link.url">
      <l :to="link.url" tag="a" external target="_parent" dark class="uppercase">
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
      return require('../../data/navigation.json')
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
    top: 0
    width: 100vw
    position: fixed
    background: rgba(0, 0, 0, 0.8)
</style>