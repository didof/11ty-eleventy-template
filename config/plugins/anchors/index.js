const defaultOptions = {
  spring: true,
  slimArrow: true,
  double: true,
}

module.exports = {
  configFunction: function (conf, options = defaultOptions) {
    options = Object.assign(defaultOptions, options)

    Object.entries(options).forEach(([name, enable]) => {
      if (!enable) return

      conf.addShortcode(`a__${name}`, require(`./${name}.js`))
    })
  },
}

module.exports.attrs = function attrs(params) {
  return Object.entries(params)
    .map(([key, value]) => [key, value].join('='))
    .join(' ')
}
