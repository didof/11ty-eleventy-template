/**
 * based on: https://www.npmjs.com/package/@sardine/eleventy-plugin-external-links
 */

const { parseHTML } = require('linkedom')

module.exports = {
  configFunction: function (conf) {
    conf.addTransform('external-links', (content, outputPath) => {
      try {
        if (outputPath && outputPath.endsWith('.html'))
          content = transform(content)
      } catch (error) {
        console.error(error)
      }
      return content
    })
  },
}

function transform(html) {
  const { document } = parseHTML(html)
  const links = [...document.querySelectorAll('a')]

  if (!links.length) return html

  links.forEach(link => {
    if (/^(https?\:\/\/|\/\/)/i.test(link.href)) {
      link.target = '_blank'
      link.setAttribute('rel', 'noreferrer noopener')
    }
  })

  return document.toString()
}
