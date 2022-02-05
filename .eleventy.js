const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const outAllDraft = filterOutByMeta('draft')
const byOrder = cardinalSortByMeta('order')

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('./src/css/')
  eleventyConfig.addWatchTarget('./src/css/')

  /** COLLECTIONS */
  eleventyConfig.addCollection('nav', collection => collection.getAll())
  eleventyConfig.addCollection('snippets_processed', collection =>
    collection.getFilteredByTag('snippets').filter(outAllDraft).sort(byOrder)
  )

  /** PLUGINS */
  eleventyConfig.addPlugin(syntaxHighlight)

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}

function filterOutByMeta(metaData) {
  return function exec(collection) {
    return !collection.data[metaData]
  }
}

function cardinalSortByMeta(metaData) {
  return function exec(a, b) {
    return a.data[metaData] - b.data[metaData]
  }
}
