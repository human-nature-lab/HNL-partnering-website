<template>
  <span @click="open" class="cursor-pointer">
    <slot />
  </span>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Email',
    props: {
      email: String,
      subject: String,
      body: String,
      target: {
        type: String,
        default: '_blank'
      }
    },
    methods: {
      open () {
        const a = document.createElement('a')
        a.href = `mailto:${this.email}`
        const ends = [['subject', this.subject], ['body', this.body]].filter(a => !!a[1])
        if (ends.length){
          a.href += '?' + ends.map(p => p.join('=')).join('&')
        }
        console.log('href', a.href)
        a.target = this.target
        document.body.appendChild(a)
        a.click()
        setTimeout(() => {
          document.body.removeChild(a)
        })
      }
    }
  })
</script>

<style lang="sass">
  
</style>