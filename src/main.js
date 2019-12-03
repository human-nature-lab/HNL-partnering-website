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
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
  })
  // head.script.push({
  //   src: 'https://www.google.com/recaptcha/api.js?render=' + process.env.GRIDSOME_RECAPTCHA_KEY,
  //   body: true
  // })
}
