<template>
  <nav class="navigation justify-between flex fixed w-screen top-0 z-10">
    <l to="/">
      <div class="hidden">HNL</div>
      <div class="logo" :style="{backgroundImage: `url(${logo})`}"></div>
    </l>
    <div class="links flex">
      <div class="link uppercase text-white">
        <button @click="onContact">
          CONTACT US
        </button>
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
    <Modal v-model="contactOpen" class="rounded">
      <div class="py-16 px-12 text-center text-black text-lg bg-white">
        <p class="">
          Email Nicholas at
          <Email 
            class="underline text-blue-500 hover:no-underline"
            :email="$static.metadata.email" 
            :subject="$static.metadata.basicEmailSubject"
            @click="track('email', 'click', 'Contact Us')">
            {{$static.metadata.email}}
          </Email>
        </p>
      </div>
    </Modal>
  </nav>
</template>

<static-query>
query {
  metadata {
    email
    basicEmailSubject
  }
}
</static-query>

<script lang="ts">
  import Vue from 'vue'
  import Email from '../components/Email.vue'
  import Modal from '../components/Modal.vue'

  export default Vue.extend({
    name: 'Navigation',
    components: { Email, Modal },
    data () {
      const d = require('../../data/navigation.json')
      d.contactOpen = false
      return d
    },
    methods: {
      onContact () {
        this.track('button', 'click', 'Contact Us')
        this.contactOpen = true
      }
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