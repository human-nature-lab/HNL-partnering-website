import Vue from 'vue'
export default Vue.extend({
  methods: {
    track (category: string, action: string, label?: string, value?: any) {
      const d = {
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        eventValue: value
      }
      console.debug('track', d)
      this.$ga.event(d)
    }
  }
})