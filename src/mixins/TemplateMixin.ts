export default {
  methods: {
    evalTemplate (template: string, argMap: {[key: string]: string}): string {
      if (!template) return ''
      template = template.replace(/\n/g, '%0A')
      const argNames = Object.keys(argMap)
      const argVals = Object.values(argMap)
      const globals = [
        'window', 
        'document', 
        'WebSocket', 
        'fetch', 
        'Function', 
        'Global', 
        'atob', 
        'btoa',
        'confirm', 
        'alert', 
        'history', 
        'localStorage', 
        'matchMedia'
      ]
      const funcString = 'return (function (' + globals.join(`, `) + ') {' + 
        'return `' + template + '`;' +
      '})()'
      const f = new Function(...argNames, funcString)
      return f(...argVals)
    }
  }
}