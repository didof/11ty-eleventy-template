const defaultOptions = {
  components: {
    minimal_3d: {
      enable: true,
      alias: null,
    },
    skeumorphic: {
      enable: true,
      alias: 'skeu',
    },
  },
}

module.exports = {
  configFunction: function (conf, options = defaultOptions) {
    options = Object.assign(defaultOptions, options)

    Object.entries(options.components).forEach(([name, { enable, alias }]) => {
      if (!enable) return

      conf.addPairedShortcode(alias || name, require(`./${name}.js`))
    })
  },
}
