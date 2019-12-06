<template>
  <nav class="navigation justify-between flex fixed w-screen top-0 z-10">
    <l to="/">
      <div class="hidden">HNL</div>
      <div class="logo" :style="{backgroundImage: `url(${logo})`}"></div>
    </l>
    <div class="links flex">
      <div class="link uppercase text-white">
        <Email 
          :email="email.email" 
          :subject="email.subject"
          @click="track('email', 'click', 'Contact Us')">
          Contact Us
        </Email>
      </div>
      <div class="link" v-for="link in links" :key="link.url">
          <l 
            :to="link.url" 
            tag="a" 
            external 
            dark 
            target="_parent" 
            :underline="false"
            class="uppercase">
            {{link.text}}
          </l>
        </div>
    </div>

  </nav>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Email from '../components/Email.vue'

  export default Vue.extend({
    name: 'Navigation',
    components: { Email },
    data () {
      return require('../../data/navigation.json')
    }
  })
</script>

<style lang="sass">
  $m: 1.5em
  .logo
    margin: $m 0
    margin-left: $m
    width: 5em
    height: 2em
    background-repeat: no-repeat
  .links
    margin: 1.2em 1em
  .link
    white-space: nowrap
    padding: 0.5em 0.7em
    font-weight: 100
    letter-spacing: 1px
    font-size: .85rem
    > *
      padding-bottom: 3px
      &:hover
        border-bottom: 1px solid white
  .navigation
    background: rgba(0, 0, 0, 0.8)
</style>