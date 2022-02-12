const outdent = require('outdent')
const { attrs } = require('./index.js')

module.exports = function minimal_3d(slot, id, type) {
  return outdent`<button class="minimal_3d" ${attrs({
    type,
    id,
  })}>${slot}</button>`
}
