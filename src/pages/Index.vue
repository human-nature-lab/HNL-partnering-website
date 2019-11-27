<template>
  <Layout>
    <div class="p-4">
      <h1 class="py-6">Current Opportunities to Support Frontier Science at the Human Nature Lab</h1>
      <p>
        Here you will find information about our latest ideas, many of which are in need of financial support in order to move from the planning stages to reality. Our team would welcome the chance to tell you more about our work in person, and to explore how our work can advance your own philanthropic interests.  Please email Nicholas Christakis here, if you would like to schedule a talk or in-person presentation about any of these giving opportunities.
      </p>
      <div class="projects py-4">
        <h2>Projects</h2>
        <div class="project my-6" v-for="({node: project}, index) in $static.projects.edges" :key="project.id">
          <h3>{{project.title}}</h3>
          <div class="flex">
            <div class="image" v-if="index % 2 === 0">
              <g-image :src="project.image"></g-image>
            </div>
            <div class="excerpt p-2">
              {{project.excerpt}}
            </div>
            <div class="image" v-if="index % 2 === 1">
              <g-image :src="project.image"></g-image>
            </div>
          </div>
        </div>
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
        image
        content
        excerpt
        timeToRead
      }
    }
  }
}
</static-query>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Index',
    metaInfo: {
      title: 'Giving'
    }
  })
</script>


<style lang="sass">
  
</style>