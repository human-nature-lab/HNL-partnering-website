<template>
  <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-100 p-8" v-if="value">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        @click="close" />
    
    <div class="modal-container mx-auto z-50 max-h-full flex flex-col shadow-lg ">
      <div class="toolbar w-full px-4 py-3 bg-gray-300 flex justify-end">
        <button @click="close">X</button>
      </div>
      <div class="modal-content overflow-y-auto ">
        <slot />      
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Modal',
    props: {
      value: Boolean
    },
    watch: {
      value () {
        if (this.value) {
          document.body.classList.add('overflow-hidden')
        } else {
          document.body.classList.remove('overflow-hidden')
        }
      }
    },
    methods: {
      close () {
        this.$emit('input', false)
      }
    }
  })
</script>

<style lang="sass">
  
</style>