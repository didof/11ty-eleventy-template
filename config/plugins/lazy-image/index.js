module.exports = {
  configFunction: function (conf) {
    const shortcode = require(`./image.js`)

    conf.addNunjucksAsyncShortcode('image', shortcode)
    conf.addLiquidShortcode('image', shortcode)
    conf.addJavaScriptFunction('image', shortcode)
  },
}
