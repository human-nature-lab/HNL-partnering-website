<template>
  <layout v-if="project">
    <div class="banner shadow-xl relative z-1">
      <div class="image-container">
        <AnImage :image="project.image" />
      </div>
    </div>
    <div class="project-page bg-white p-6 max-w-5xl mx-auto text-base md:text-lg">
      <h1 class="text-3xl md:text-5xl my-6">{{project.title}}</h1>
      <p class="py-6 text-lg font-semibold md:text-xl">{{project.excerpt}}</p>
      <div v-html="project.content"></div>
      <div class="mt-8">
        <h3 class="text-2xl mb-2 uppercase font-semibold">What we need</h3>
        <table class="w-full table-auto">
          <tbody>
            <tr class="table-row" v-for="goal in project.goals" :key="goal.cost">
              <td class="pl-6 py-2 w-2">{{goal.cost}}</td>
              <td class="w-2 px-6"> - </td>
              <td class="py-2">{{goal.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="contact my-6">
        <Email :email="email.email" :subject="evalTemplate(email.subject, project)" :body="evalTemplate(email.body, project)">
          {{evalTemplate(contactMessage, project)}}
        </Email>
      </div>
    </div>
  </layout>
</template>

<page-query>
query ($id: ID!) {
  project(id: $id) {
    title
    excerpt
    goals {
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