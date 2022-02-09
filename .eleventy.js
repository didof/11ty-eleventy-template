const fs = require('fs')

/** LIBRARIES */
const mdLibrary = require('./config/libraries/md.js')

/** PLUGINS */
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginOpenInCodepen = require('@11tyrocks/eleventy-plugin-open-in-codepen')
const pluginNavigation = require('@11ty/eleventy-navigation')
const pluginBlog = require('./config/plugins/blog.plugin.js')
// const pluginRss = require('@11ty/eleventy-plugin-rss')

/** TRANSFORMERS */
const htmlMinifierTransformer = require('./config/transformers/html-minifier.js')

/** FILTERS */
const headFilter = require('./config/filters/head.js')

/** HELPERS */
const outAllDraft = filterOutByMeta('draft')
const byOrder = cardinalSortByMeta('order')

/** SHORTCODES */
const cardShortcode = require('./src/plugins/card.js')
const imageShortcode = require('./src/plugins/image.js')

const { DateTime } = require('luxon')

module.exports = conf => {
  conf.addPassthroughCopy({ './src/css/': '/assets/' })
  conf.addWatchTarget('./src/css/')
  conf.addWatchTarget('./src/utils/')
  conf.addWatchTarget('./tailwind.config.js')

  // https://github.com/11ty/eleventy/issues/768
  // https://github.com/gfscott/eleventy-plugin-embed-twitter

  /** COLLECTIONS */
  conf.addCollection('nav', collection => collection.getAll())
  conf.addCollection('snippets_processed', collection =>
    collection.getFilteredByTag('snippets').filter(outAllDraft).sort(byOrder)
  )
  

  /** PLUGINS */
  conf.addPlugin(pluginSyntaxHighlight)
  conf.addPlugin(pluginNavigation)
  conf.addPlugin(pluginBlog)
  conf.addPlugin(pluginOpenInCodepen, {
    siteUrl: 'didof.dev',
    siteTitle: 'didof',
    siteTag: 'didof',
    buttonClass: 'button-in-codepen-button',
    buttonIconClass: 'button-in-codepen-button-icon',
  })
  // conf.addPlugin(pluginRss)

  /** LIBRARIES */
  conf.setLibrary('md', mdLibrary(conf))

  /** FILTERS */
  conf.addFilter('head', headFilter)

  conf.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('dd LLL yyyy')
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  conf.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd')
  })

  conf.addFilter('sitemapDateTimeString', dateObj => {
    const dt = DateTime.fromJSDate(dateObj, { zone: 'utc' })
    if (!dt.isValid) {
      return ''
    }
    return dt.toISO()
  })

  conf.addFilter('filterTagList', tags => {
    return (tags || []).filter(
      tag => ['all', 'nav', 'post', 'Posts'].indexOf(tag) === -1
    )
  })

  /** SHORTCODES */
  conf.addShortcode('version', () => String(new Date()))
  conf.addPairedShortcode('card', cardShortcode)
  conf.addNunjucksAsyncShortcode('image', imageShortcode)
  conf.addLiquidShortcode('image', imageShortcode)
  conf.addJavaScriptFunction('image', imageShortcode)

  conf.addTransform('htmlmin', htmlMinifierTransformer)

  /** SERVER */
  conf.setBrowserSyncConfig({
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
