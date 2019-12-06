import Vue from 'vue'
export default Vue.extend({
  metaInfo () {
    return {
      meta: [{
        name: 'description',
        content: ''
      }, {
        name: 'keywords',
        content: ''
      }]
    }
  }
})