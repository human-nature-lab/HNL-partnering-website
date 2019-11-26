// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import './main.sass'
import DefaultLayout from '~/layouts/Default.vue'
import Link from './components/Link.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('l', Link)
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'author',
    href: '/humans.txt'
  })
}
