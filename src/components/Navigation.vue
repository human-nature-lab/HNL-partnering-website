<template>
  <nav class="navigation justify-between flex flex-wrap">
    <l to="/">
      <div class="logo" :style="{backgroundImage: `url(${logo})`}"></div>
    </l>
    <div class="links flex">
      <div class="link" v-for="link in links" :key="link.url">
        <l :to="link.url" tag="a" external target="_parent" dark class="uppercase">
          {{link.text}}
        </l>
      </div>
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
  $m: 1.5em
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
    a
      padding-bottom: 3px
  .navigation
    top: 0
    width: 100vw
    position: fixed
    background: rgba(0, 0, 0, 0.8)
</style>