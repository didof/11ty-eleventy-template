const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('./src/css/')
  eleventyConfig.addWatchTarget('./src/css/')

  eleventyConfig.addCollection('nav', collection => collection.getAll())

  eleventyConfig.addPlugin(syntaxHighlight)

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
