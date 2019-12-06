<template>
  <layout v-if="project">
    <div class="banner shadow-xl relative z-1">
      <div class="image-container">
        <g-image v-if="project.image && project.image.src"
          class="object-cover" 
          :style="imageStyle(project.image)"
          :alt="project.image.description"
          :src="project.image.src" />
      </div>
    </div>
    <div class="project-page bg-white p-6 max-w-5xl mx-auto text-base md:text-lg">
      <h1 class="text-3xl md:text-5xl my-6">{{project.title}}</h1>
      <p class="py-6 text-lg font-semibold md:text-xl">{{project.excerpt}}</p>
      <div v-html="project.content"></div>
      <div class="mt-8" v-if="project.goals.length">
        <h3 class="text-2xl mb-2 uppercase font-semibold border-b">What your support achieves</h3>
        <div class="w-full">
          <div class="block mt-8 md:flex items-center" v-for="goal in project.goals" :key="goal.cost">
            <div class="md:pl-6 md:w-1/5 w-full pt-2 text-xl font-bold whitespace-no-wrap flex flex-no-wrap flex-none">
              <div>{{goal.cost}}</div>
            </div>
            <div class="py-2 w-full" v-html="goal.description" />
            <div class="py-2 md:px-6 flex-grow-0">
              <Email class="py-2 px-6 bg-blue-300 cursor-pointer hover:bg-blue-200 whitespace-no-wrap"
                :email="email.email" 
                :subject="evalTemplate(email.subject, {project, goal})" 
                :body="evalTemplate(email.body, {project, goal})"
                @click="track('email', 'click', project.title + '-goal-' + goal.id)">
                Support this
              </Email>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="contact my-6">
        <Email :email="email.email" :subject="evalTemplate(email.subject, project)" :body="evalTemplate(email.body, project)">
          {{evalTemplate(contactMessage, project)}}
        </Email>
      </div> -->
    </div>
  </layout>
</template>

<page-query>
query ($id: ID!) {
  project(id: $id) {
    title
    path
    excerpt
    goals {
      id
      cost
      description
    }
    image {
      src
      description
      position
    }
    content
  }
}
</page-query>

<script lang="ts">
  import Vue from 'vue'
  import { Project } from '../types/Project'
  import Email from '../components/Email.vue'
  import ImageStyle from '../mixins/ImageStyle'
  import TemplateMixin from '../mixins/TemplateMixin'

  export default Vue.extend({
    name: 'Project',
    components: { Email },
    mixins: [ImageStyle, TemplateMixin],
    data () {
      const d = require('../../data/projects.json')
      return {
        contactMessage: d.contactMessage,
        email: d.email
      }
    },
    computed: {
      project (): Project {
        return this.$page && this.$page.project
      }
    }
  })
</script>

<style lang="sass">
  .project-page
    min-height: calc(100vh - 80px)
  .banner
    height: 40vmax
    max-height: 50vh
  .image-container
    width: 100%
    height: 100%
    // height: 50vh
    img
      width: 100%
      height: 100%
</style>