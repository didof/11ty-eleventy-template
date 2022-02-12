const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

module.exports = conf =>
  markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'after',
      class: 'md-anchor',
      symbol: '🔗',
      level: [1, 2, 3, 4],
    }),
    slugify: conf.getFilter('slug'),
  })
