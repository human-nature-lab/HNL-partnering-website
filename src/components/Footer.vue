<template>
  <footer class="mt-32 p-6 bg-black text-white justify-between">
    <div class="max-w-5xl m-auto flex flex-col md:flex-row">
      <div class="px-6 py-4 flex-shrink-0">
        <ul>
          <li class="pb-2 uppercase">
            <l :to="links.hnl" >
              Human Nature Lab
            </l>
          </li>
          <li class="text-gray-200 font-sm" v-for="link in leftLinks" :key="link[0]">
            <l :to="link[1]" class="text-gray-500 hover:text-white" :underline="false">
              {{link[0]}}
            </l>
          </li>
        </ul>
      </div>
      <div class="px-6 py-4">
        <div class="address">
          <l :to="links.yins">
            <div class="name pb-2">Yale Institute for Network Science</div>
          </l>
          <div v-for="line in address" :key="line" class="text-gray-500">
            {{line}}
          </div>
        </div>
        <div class="copyright py-4">
          <div>Yale University</div>
          <div class="text-gray-500">{{copyright}}</div>
        </div>
      </div>
      <div class="px-6 py-4 text-gray-500">
        <div>Visit Us On Social Media</div>
        <ul class="flex">
          <li v-for="(link, text) in social" :key="link.href" class="social capitalize hover:text-white w-8 h-8 p-1 mt-3 mr-3 rounded">
            <l :to="link.href">
              <img :src="link.icon" :alt="`Logo for ${text}`">
            </l>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Footer',
    data () {
      const meta = require('../../data/meta.json')
      meta.leftLinks = [
        ['Christakis', meta.links.christakis], 
        ['Research', meta.links.research],
        ['People', meta.links.people],
        ['Teaching', meta.links.teaching],
      ]
      return meta
    }
  })
</script>

<style lang="sass">
  .social
    background: #4e4e4e
    filter: brightness(75%)
    &:hover
      filter: none
</style>