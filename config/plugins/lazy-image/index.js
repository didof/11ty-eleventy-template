const defaultOptions = {
  image: true,
}

module.exports = {
  configFunction: function (conf, options = defaultOptions) {
    options = Object.assign(defaultOptions, options)

    Object.entries(options).forEach(([name, enable]) => {
      if (!enable) return

      const shortcode = require(`./${name}.js`)

      conf.addNunjucksAsyncShortcode(name, shortcode)
      conf.addLiquidShortcode(name, shortcode)
      conf.addJavaScriptFunction(name, shortcode)
    })
  },
}
