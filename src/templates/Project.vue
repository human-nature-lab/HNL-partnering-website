<template>
  <layout v-if="project">
    <div class="banner">
      <div class="image-container" v-if="project.image">
        <g-image 
          class="object-cover" 
          :style="imageStyle"
          :src="project.image.src" />
      </div>
    </div>
    <div class="project-page bg-white p-6 max-w-5xl m-auto">
      <h1 class="text-5xl mt-6 mb-2">{{project.title}}</h1>
      <p class="py-4">{{project.excerpt}}</p>
      <div v-html="project.content"></div>
    </div>
  </layout>
</template>

<page-query>
query ($id: ID!) {
  project(id: $id) {
    title
    excerpt
    goals
    image {
      src
      position
    }
    content
  }
}
</page-query>

<script lang="ts">
  import Vue from 'vue'
  import { Project } from '../types/Project'

  export default Vue.extend({
    name: 'Project',
    computed: {
      imageStyle (): object {
        const style = {
          objectPosition: '50% 50%'
        }
        if (this.project && this.project.image.position) {
          style.objectPosition = this.project.image.position
        }
        return style
      },
      project (): Project {
        return this.$page && this.$page.project
      }
    }
  })
</script>

<style lang="sass">
  .banner
    height: 40vmax
    max-height: 50vh
  .image-container
    width: 100vw
    height: 100%
    // height: 50vh
    img
      width: 100%
      height: 100%
</style>