export interface Project {
  priority?: number
  title: string
  isEven: boolean
  image: {
    src: string
    alt?: string
    position?: string
  }
}