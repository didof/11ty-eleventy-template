const fs = require('fs')

/** LIBRARIES */
const mdLibrary = require('./config/libraries/md.js')

/** PLUGINS */
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginOpenInCodepen = require('@11tyrocks/eleventy-plugin-open-in-codepen')
const pluginNavigation = require('@11ty/eleventy-navigation')
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

const { DateTime } = require('luxon')

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
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(pluginOpenInCodepen, {
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
  eleventyConfig.addFilter('head', headFilter)
  
  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('dd LLL yyyy')
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd')
  })

  eleventyConfig.addFilter('sitemapDateTimeString', dateObj => {
    const dt = DateTime.fromJSDate(dateObj, { zone: 'utc' })
    if (!dt.isValid) {
      return ''
    }
    return dt.toISO()
  })

  eleventyConfig.addFilter('filterTagList', (tags) => {
    return (tags || []).filter(tag => ["all", "nav", "post", "Posts"].indexOf(tag) === -1)
  })
  
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
