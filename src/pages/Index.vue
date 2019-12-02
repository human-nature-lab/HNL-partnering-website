<template>
  <Layout>
    <div class="p-4 max-w-5xl m-auto">
      <h1 class="text-4xl py-6">Current Opportunities to Support Frontier Science at the Human Nature Lab</h1>
      <p>
        {{description}}
      </p>
      <hr class="my-16">
      <div class="projects">
        <template v-for="project in projects">
          <div class="project flex md:flex-row" 
            :class="project.isEven ? 'flex-col' : 'flex-col-reverse'"
            :key="project.id">
            <div class="image flex-shrink-0 md:w-1/3 w-full h-64" v-if="project.image && project.isEven">
              <g-image 
                class="h-full object-cover" 
                :src="project.image.src"
                :alt="project.image.alt"
                v-if="project.image.src" />
            </div>
            <div class="content py-6 md:py-0" :class="project.isEven ? 'md:pl-8' : 'md:pr-8'">
              <h3 class="text-2xl mb-2">{{project.title}}</h3>
              <p class="excerpt pt-4 pb-6">
                {{project.excerpt}}
              </p>
              <!-- <ul class="prices">
                <li class="price py-2" v-for="goal in project.goals" :key="goal">
                  {{goal}}
                </li>
              </ul> -->
              <l 
                  class="px-4 py-2 button" 
                  :to="project.path">Learn more</l>
              <!-- <button class="px-4 py-2 bg-gray-300" @click="openProject(project)">Learn more</button> -->
            </div>
            <div class="image flex-shrink-0 md:w-1/3 w-full h-64" v-if="project.image && !project.isEven">
              <g-image 
                class="h-full object-cover" 
                :src="project.image.src"
                :alt="project.image.alt"
                v-if="project.image.src" />
            </div>
          </div>
          <hr class="my-16">
        </template>
      </div>
    </div>
  </Layout> 
</template>

<static-query>
query {
  projects: allProject {
    edges {
      node {
        id
        image {
          src
        }
        content
        title
        excerpt
        goals
        path
        priority
        timeToRead
      }
    }
  }
}
</static-query>

<script lang="ts">
  import Vue from 'vue'
  import Modal from '../components/Modal.vue'
  import { Project } from '../types/Project'

  export default Vue.extend({
    name: 'Index',
    components: { Modal },
    metaInfo: {
      title: 'Giving'
    },
    data () {
      return require('../../data/projects.json')
    },
    computed: {
      projects (): Project[] {
        const projects = this.$static.projects.edges.map((edge: {node: Project}) => {
          return edge.node
        })
        return projects.sort((a: Project, b: Project) => {
          if (a.priority == null) {
            a.priority = 10000
          }
          if (b.priority == null) {
            b.priority = 10000
          }
          return a.priority - b.priority
        }).map((p: Project, i: number) => {
          p.isEven = (i % 2 === 0 )
          // p.isEven = true
          return p
        })
      }
    }
  })
</script>


<style lang="sass" scoped>
  $buttonText: #000A23
  $buttonColor: rgba(0, 10, 14, .10)
  .button
    transition: all .2s
    background-color: $buttonColor
    color: $buttonText
    &:hover
      background-color: rgba(0, 10, 14, .30)
  // .project
  //   height: 60vh
  // .image
  //   width: 33%
  .image
    // height: 250px
  //   img 
  //     max-width: 50vw
  //     max-height: 100%
</style>