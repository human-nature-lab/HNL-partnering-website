export default {
  methods: {
    imageStyle (image: {position?: string}): object {
      const style = {
        objectPosition: '50% 50%'
      }
      if (image && image.position) {
        style.objectPosition = image.position
      }
      return style
    }
  }
}