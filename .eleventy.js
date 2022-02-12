// @ts-nocheck
const fs = require('fs')

const outAllDraft = filterOutByMeta('draft')
const byOrder = cardinalSortByMeta('order')

module.exports = conf => {
  conf.addPassthroughCopy({ './src/assets/styles': '/assets/styles' })
  conf.addPassthroughCopy({ './src/assets/images': '/assets/images' })
  conf.addPassthroughCopy({ './src/assets/fonts': '/assets/fonts' })
  conf.addWatchTarget('./src/assets/')
  conf.addWatchTarget('./src/utils/')
  conf.addWatchTarget('./tailwind.config.js')

  conf.addCollection('nav', collection => collection.getAll())
  conf.addCollection('snippets_processed', collection =>
    collection.getFilteredByTag('snippets').filter(outAllDraft).sort(byOrder)
  )

  conf.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
  conf.addPlugin(require('@11ty/eleventy-navigation'))
  conf.addPlugin(require('eleventy-plugin-time-to-read'), {
    speed: '1000 characters per minute',
    language: 'en',
    style: 'long',
    type: 'unit',
    hours: 'auto',
    minutes: true,
    seconds: false,
    digits: 1,
    output: function (data) {
      const emoji = [null, '🐜', '🐤', '🐇', '🐕', '🐘'][data.minutes]
      return `${emoji} ${data.minutes} ${data.speed.interval} reading`
    },
  })
  conf.addPlugin(require('./config/plugins/blog'))
  conf.addPlugin(require('./config/plugins/buttons'))
  conf.addPlugin(require('./config/plugins/filters'))
  conf.addPlugin(require('./config/plugins/lazy-image'))
  conf.addPlugin(require('./config/plugins/cards'))
  conf.addPlugin(require('./config/plugins/external-links'))
  conf.addPlugin(require('eleventy-google-fonts'))

  conf.setLibrary('md', require('./config/libraries/md.js')(conf))

  conf.addShortcode('version', () => String(new Date()))

  conf.addTransform(
    'htmlmin',
    require('./config/transformers/html-minifier.js')
  )

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
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
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

// https://github.com/11ty/eleventy/issues/768
// https://github.com/gfscott/eleventy-plugin-embed-twitter
