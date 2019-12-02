const { selectAll } = require('unist-util-select')

// Add classes by selector
// TODO: Add classes by type of node
// TODO: Add other attributes
module.exports = (opts) => {
  return tree => {
    for (const attrName in opts.selectors) {
      for (const selector in opts.selectors[attrName]) {
        const val = opts.selectors[attrName][selector]
        const nodes = selectAll(selector, tree)
        nodes.forEach(node => {
          node.data = node.data || {}
          node.data.hProperties = node.data.hProperties || {}
          node.data.hProperties[attrName] = node.data.hProperties[attrName] || []
          node.data.hProperties[attrName] = val
        })
      }
    }
  }
}