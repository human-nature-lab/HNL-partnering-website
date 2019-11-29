<template>
  <Layout>
    <div class="p-4">
      <h1 class="text-4xl py-6">Current Opportunities to Support Frontier Science at the Human Nature Lab</h1>
      <p>
        {{description}}
      </p>
      <div class="projects py-4">
        <h2 class="text-3xl my-8">Projects</h2>
        <div class="project flex mb-16" v-for="({node: project}, index) in $static.projects.edges" :key="project.id">
          <div class="image" v-if="index % 2 === 0">
            <g-image class="" :src="project.image" />
          </div>
          <div class="content p-2">
            <h3 class="text-2xl my-4">{{project.title}}</h3>
            <div class="excerpt">
              {{project.excerpt}}
            </div>
            <div class="prices">
              <div class="price p-4" v-for="price in project.prices" :key="price">
                {{price}}
              </div>
            </div>
            <button class="px-4 py-2 bg-gray-300" @click="openProject(project)">Learn more</button>
          </div>
          <div class="image h-full" v-if="index % 2 === 1">
            <g-image class="h-full" :src="project.image" />
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="showModal">
      <div class="project-page bg-white p-6">
        <h2>{{project.title}}</h2>
        <p>{{project.excerpt}}</p>
        <p v-html="project.content"></p>
      </div>
    </Modal>
  </Layout> 
</template>

<static-query>
query {
  projects: allProject {
    edges {
      node {
        id
        image
        content
        title
        excerpt
        prices
        timeToRead
      }
    }
  }
}
</static-query>

<script lang="ts">
  import Vue from 'vue'
  import Modal from '../components/Modal.vue'

  export default Vue.extend({
    name: 'Index',
    components: { Modal },
    metaInfo: {
      title: 'Giving'
    },
    data () {
      return Object.assign({ project: {}, showModal: false }, require('../../data/projects.json'))
    },
    methods: {
      openProject (project: object) {
        this.showModal = true
        this.project = project
      }
    }
  })
</script>


<style lang="sass">
  .project, .image
    height: 60vh
  .image
    img 
      max-width: 50vw
      max-height: 100%
</style>