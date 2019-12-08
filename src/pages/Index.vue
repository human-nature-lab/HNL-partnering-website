<template>
  <Layout>
    <div class="max-w-5xl m-auto px-3 md:px-6">
      <div>
        <h1 class="text-3xl md:text-4xl py-6">
          {{title}}
        </h1>
        <p>
          Our lab works at the intersection of the biological, computational, and social sciences in diverse, cutting-edge areas &#151; from public health to the microbiome to genomics to artificial intelligence to organizational behavior to network science. Some of our latest and riskiest ideas are in need of financial support in order to move from the planning stages to reality.
        </p>
        <p class="py-4">
          Our team would welcome the chance to tell you more about our work in person and to explore how our work can advance your own philanthropic objectives. Please email Nicholas Christakis <Email :email="$static.metadata.email" :subject="$static.metadata.basicEmailSubject" class="underline text-blue-500 hover:no-underline" @click="track('email', 'click', 'description')">here</Email>, if you would like to meet to discuss any of these projects or your interests more generally.
        </p>
      </div>
      <h2 class="text-2xl md:text-3xl mt-16">{{projectsTitle}}</h2>
      <hr class="mt-2 mb-16">
      <div class="projects">
        <template v-for="project in projects">
          <div class="project md:shadow my-16 flex flex-col items-stretch md:max-h-project" 
            :class="project.isEven ? 'md:flex-row' : 'md:flex-row-reverse'"
            :key="project.id">
            <div class="image flex-shrink-0 flex-initial w-full md:max-w-1/3 h-64 md:h-auto">
              <l :to="project.path" @click="onProjectNav(project, 'image')">
                <g-image 
                  v-if="project.image && project.image.src"
                  class="h-full object-cover" 
                  :style="imageStyle(project.image)"
                  :alt="project.image.description"
                  :src="project.image.src" />
              </l>
            </div>
            <div class="md:px-6 py-6 content " :class="project.isEven ? 'md:pl-8' : 'md:pr-8'">
              <h3 class="text-2xl mb-2">
                <l :to="project.path" @click="onProjectNav(project, 'title')">
                  {{project.title}}
                </l>
              </h3>
              <p class="excerpt pt-4 pb-6" v-html="project.excerpt" />
              <l targetClass="button inline-block px-4 py-2 hover:text-white whitespace-no-wrap"
                @click="onProjectNav(project, 'read more')"
                :to="project.path">Read more about this research</l>
            </div>
          </div>
          <!-- <hr class="my-16"> -->
        </template>
      </div>
    </div>
  </Layout> 
</template>

<static-query>
query {
  metadata {
    email
    basicEmailSubject
  }
  projects: allProject {
    edges {
      node {
        id
        title
        image {
          src
          description
          position
        }
        content
        excerpt
        goals {
          cost
          description
        }
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
  import ImageStyle from '../mixins/ImageStyle'
  import Email from '../components/Email.vue'
  import { Project } from '../types/Project'

  export default Vue.extend({
    name: 'Index',
    mixins: [ImageStyle],
    components: { Email },
    metaInfo: {
      title: process.env.GRIDSOME_SITE_NAME
    },
    data () {
      const d = require('../../data/projects.json')
      d.email = require('../../data/navigation.json').email
      return d
    },
    methods: {
      onProjectNav (project: Project, component: string) {
        this.track('link', 'project', component)
      }
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


<style lang="sass">
  $buttonColor: rgba(0, 10, 14, .10)
  .project
    background-color: #fcfcfc
  .button
    transition: all .2s
    background-color: $buttonColor
    &:hover
      background-color: rgba(0, 10, 14, .30)
</style>