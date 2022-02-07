const htmlmin = require('html-minifier')

module.exports = (content, outputPath) => {
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
}
