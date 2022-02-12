var { parseHTML } = require('linkedom')

module.exports = {
  configFunction: function (conf) {
    conf.addTransform('google-fonts', (content, outputPath) => {
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



  return document.toString()
}
