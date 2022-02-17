const defaultOptions = {
  goey: true,
}

module.exports = {
  configFunction: function (conf, options = defaultOptions) {
    options = Object.assign(defaultOptions, options)

    Object.entries(options).forEach(([name, enable]) => {
      if (!enable) return

      conf.addPairedShortcode(`footer__${name}`, require(`./${name}.js`))
    })
  },
}

module.exports.attrs = function attrs(params) {
  if (!params) return ''

  return Object.entries(params)
    .map(([key, value]) => [key, value].join('='))
    .join(' ')
}
