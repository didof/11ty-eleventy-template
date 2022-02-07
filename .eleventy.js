const fs = require('fs')

/** LIBRARIES */
const mdLibrary = require('./config/libraries/md.js')

/** PLUGINS */
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const openInCodepen = require('@11tyrocks/eleventy-plugin-open-in-codepen')
// const pluginRss = require('@11ty/eleventy-plugin-rss')

/** TRANSFORMERS */
const htmlMinifierTransformer = require('./config/transformers/html-minifier.js')

/** FILTERS */
const filterDateFormat = require('./config/filters/dateFormat.js')
const headFilter = require('./config/filters/head.js')

/** HELPERS */
const outAllDraft = filterOutByMeta('draft')
const byOrder = cardinalSortByMeta('order')

/** SHORTCODES */
const cardShortcode = require('./src/plugins/card.js')
const imageShortcode = require('./src/plugins/image.js')

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
  // eleventyConfig.addPlugin(pluginRss)

  /** LIBRARIES */
  eleventyConfig.setLibrary('md', mdLibrary(eleventyConfig))

  /** FILTERS */
  eleventyConfig.addFilter(...filterDateFormat)
  eleventyConfig.addFilter('name', headFilter)

  /** SHORTCODES */
  eleventyConfig.addShortcode('version', () => String(new Date()))
  eleventyConfig.addPairedShortcode('card', cardShortcode)
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode)
  eleventyConfig.addLiquidShortcode('image', imageShortcode)
  eleventyConfig.addJavaScriptFunction('image', imageShortcode)

  eleventyConfig.addTransform('htmlmin', htmlMinifierTransformer)

  /** SERVER */
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('public/404/index.html')

        browserSync.addMiddleware('*', (req, res) => {
          res.writeHead(404, { 'Content-type': 'text/html; charset=UTF-8' })
          res.write(content_404)
          res.end()
        })
      },
    },
    ui: false,
    ghostMode: false,
  })

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    // markdownTemplateEngine: "njk",
    // htmlTemplateEngine: "njk",
    // pathPrefix: "/",
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'public',
    },
  }
}

/** FACTORIES */

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
