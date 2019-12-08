import Vue, { ComponentOptions } from 'vue'

interface SMap {
  [key: string]: any
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $page: SMap
    $static: SMap
    $ga: {
      event (o: SMap): void
    }
    track (...args: string[]): void
  }
}