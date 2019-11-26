<template>
  <component :is="linkType" v-bind="linkProps">
    <slot />
  </component>
</template>

<script lang="ts">
  import Vue, { Component } from 'vue'
  export default Vue.extend({
    name: 'Link',
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      dark: {
        type: Boolean,
        default: false
      },
      external: {
        type: Boolean,
        default: false
      },
      target: {
        type: String,
        default: '_blank'
      }
    },
    computed: {
      linkType (): String {
        return this.external ? 'a' : 'g-link'
      },
      linkProps (): object {
        let classes = ['hover:underline']
        if (this.dark) {
          classes.push('text-white')
        }
        return this.external ? {
          href: this.to,
          class: classes,
          rel: 'noreferrer',
          target: this.target
        } : {
          to: this.to,
          class: classes
        }
      }
    }
  })
</script>

<style lang="sass">
  
</style>