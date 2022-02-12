const defaultOptions = {
  prefix: 'card',
  components: {
    ec: {
      enable: true,
      alias: null,
    },
  },
}

module.exports = {
  configFunction: function (conf, options = defaultOptions) {
    options = Object.assign(defaultOptions, options)

    Object.entries(options.components).forEach(([name, { enable, alias }]) => {
      if (!enable) return

      let registerName = alias || name

      registerName =
        options.prefix +
        registerName[0].toUpperCase() +
        registerName.substring(1)

      conf.addPairedShortcode(registerName, require(`./${name}.js`))
    })
  },
}

module.exports.attrs = function attrs({ id }) {
  return `${id ? `id=${id}` : ''} `
}