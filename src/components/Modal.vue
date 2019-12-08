<template>
  <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-100 p-8" v-if="value">
    <div class="modal-overlay absolute w-full h-full"
        @click="close" />
    <div class="modal-container mx-auto z-50 max-h-full flex flex-col shadow-lg rounded overflow-hidden">
      <div class="toolbar w-full flex justify-end">
        <button @click="close" class="px-4 py-3">&#x2716;</button>
      </div>
      <div class="modal-content bg-white overflow-y-auto ">
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
      close (): void {
        this.$emit('input', false)
        this.track('modal', 'close')
      }
    }
  })
</script>

<style lang="sass">
  .modal-overlay
    background-color: rgba(0, 0, 0, .3)
  .modal-container
    // box-shadow: 5px 5px 15px rgba(255, 255, 255, .5)
    .toolbar
      color: white
      background-color: rgba(0, 0, 0, 0.8)
</style>