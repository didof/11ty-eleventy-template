const fs = require('fs')

module.exports = (filename, callback) => {
  fs.stat(filename, (error, { mtime }) => {
    if (error) {
      console.error(error)
      return
    }

    if (callback) {
      return callback(mtime)
    }

    return mtime
  })
}
