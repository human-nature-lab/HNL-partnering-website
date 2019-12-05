export interface Project {
  priority?: number
  title: string
  isEven: boolean
  path: string
  image: {
    src: string
    alt?: string
    position?: string
  }
}