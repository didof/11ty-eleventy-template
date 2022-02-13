const defaultOptions = {
  head: true,
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  readableDate: true,
  htmlDateString: true,
  sitemapDateTimeString: true,
  lastModifiedDate: true,
}

module.exports = {
  configFunction: function (conf, options = defaultOptions) {
    options = Object.assign(defaultOptions, options)

    Object.entries(options).forEach(([name, enable]) => {
      if (!enable) return

      conf.addFilter(name, require(`./${name}.js`))
    })
  },
}
