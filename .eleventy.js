module.exports = conf => {
  conf.addPassthroughCopy('./src/css/')
  conf.addWatchTarget('./src/css/')

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
