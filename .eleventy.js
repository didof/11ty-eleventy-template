const fs = require('fs')

/** LIBRARIES */
const mdLibrary = require('./config/libraries/md.js')

/** PLUGINS */
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginNavigation = require('@11ty/eleventy-navigation')
const pluginBlog = require('./config/plugins/blog.plugin.js')
const pluginButtons = require('./config/plugins/buttons')
const pluginFilters = require('./config/plugins/filters')
// const pluginRss = require('@11ty/eleventy-plugin-rss')

/** TRANSFORMERS */
const htmlMinifierTransformer = require('./config/transformers/html-minifier.js')

/** FILTERS */

/** HELPERS */
const outAllDraft = filterOutByMeta('draft')
const byOrder = cardinalSortByMeta('order')

/** SHORTCODES */
const cardShortcode = require('./src/plugins/card.js')
const imageShortcode = require('./src/plugins/image.js')

const { DateTime } = require('luxon')

module.exports = conf => {
  conf.addPassthroughCopy({ './src/assets/styles': '/assets/styles' })
  conf.addWatchTarget('./src/assets/')
  conf.addWatchTarget('./src/utils/')
  conf.addWatchTarget('./tailwind.config.js')

  // https://github.com/11ty/eleventy/issues/768
  // https://github.com/gfscott/eleventy-plugin-embed-twitter

  conf.addCollection('nav', collection => collection.getAll())
  conf.addCollection('snippets_processed', collection =>
    collection.getFilteredByTag('snippets').filter(outAllDraft).sort(byOrder)
  )

  conf.addPlugin(pluginSyntaxHighlight)
  conf.addPlugin(pluginNavigation)
  conf.addPlugin(pluginBlog)
  conf.addPlugin(pluginButtons)
  conf.addPlugin(pluginFilters)
  // conf.addPlugin(pluginRss)

  conf.setLibrary('md', mdLibrary(conf))

  conf.addShortcode('version', () => String(new Date()))
  conf.addPairedShortcode('card', cardShortcode)
  conf.addNunjucksAsyncShortcode('image', imageShortcode)
  conf.addLiquidShortcode('image', imageShortcode)
  conf.addJavaScriptFunction('image', imageShortcode)

  conf.addTransform('htmlmin', htmlMinifierTransformer)

  /** SERVER */
  conf.setBrowserSyncConfig({
    files: './public/**/*.css',
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
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
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
