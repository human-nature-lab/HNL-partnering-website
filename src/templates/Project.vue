<template>
  <layout v-if="project">
    <div class="banner shadow-xl relative z-1">
      <div class="image-container" v-if="project.image && project.image.src">
        <g-image 
          class="object-cover" 
          :style="imageStyle"
          :src="project.image.src" />
      </div>
    </div>
    <div class="project-page bg-white p-6 max-w-5xl mx-auto text-lg">
      <h1 class="text-5xl my-6">{{project.title}}</h1>
      <p class="py-6 text-xl font-semibold">{{project.excerpt}}</p>
      <div v-html="project.content"></div>
      <div class="mt-8">
        <h3 class="text-2xl mb-2">Goals</h3>
        <table class="w-full table-auto">
          <tbody>
            <tr class="table-row flex" v-for="goal in project.goals" :key="goal.cost">
              <td class="px-6 py-2 w-1/5 border">{{goal.cost}}</td>
              <td class="px-6 py-2 border">{{goal.description}}</td>
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

  export default Vue.extend({
    name: 'Project',
    components: { Email },
    data () {
      const d = require('../../data/projects.json')
      return {
        contactMessage: d.contactMessage,
        email: d.email
      }
    },
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
    },
    methods: {
      evalTemplate (template: string, argMap: {[key: string]: string}) {
        if (!template) return ''
        template = template.replace(/\n/g, '%0A')
        const argNames = Object.keys(argMap)
        const argVals = Object.values(argMap)
        const globals = [
          'window', 
          'document', 
          'WebSocket', 
          'fetch', 
          'Function', 
          'Global', 
          'atob', 
          'btoa',
          'confirm', 
          'alert', 
          'history', 
          'localStorage', 
          'matchMedia'
        ]
        const funcString = 'return (function (' + globals.join(`, `) + ') {' + 
          'return `' + template + '`;' +
        '})()'
        const f = new Function(...argNames, funcString)
        return f(...argVals)
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