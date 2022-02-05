const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const openInCodepen = require('@11tyrocks/eleventy-plugin-open-in-codepen')
const pluginRss = require('@11ty/eleventy-plugin-rss')

const htmlmin = require('html-minifier')
const filterDateFormat = require('./src/utils/filters/dateFormat.js')

const outAllDraft = filterOutByMeta('draft')
const byOrder = cardinalSortByMeta('order')

const card = require('./src/utils/shortcodes/card.js')

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy({ './src/css/': '/assets/' })
  eleventyConfig.addWatchTarget('./src/css/')
  eleventyConfig.addWatchTarget('./src/utils/')
  eleventyConfig.addWatchTarget('./tailwind.config.js')

  // https://github.com/11ty/eleventy/issues/768
  // https://github.com/gfscott/eleventy-plugin-embed-twitter

  /** COLLECTIONS */
  eleventyConfig.addCollection('nav', collection => collection.getAll())
  eleventyConfig.addCollection('snippets_processed', collection =>
    collection.getFilteredByTag('snippets').filter(outAllDraft).sort(byOrder)
  )

  /** PLUGINS */
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(openInCodepen, {
    siteUrl: 'didof.dev',
    siteTitle: 'didof',
    siteTag: 'didof',
    buttonClass: 'button-in-codepen-button',
    buttonIconClass: 'button-in-codepen-button-icon',
  })
  eleventyConfig.addPlugin(pluginRss)

  /** FILTERS */
  // filters.registerAll(eleventyConfig)
  eleventyConfig.addFilter(...filterDateFormat)

  eleventyConfig.addShortcode('version', () => String(new Date()))
  eleventyConfig.addPairedShortcode("card", card);

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (
      process.env.ELEVENTY_ENV === 'production' &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      console.info(`[11ty] Minifying ${outputPath}`)
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
    }

    return content
  })

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
