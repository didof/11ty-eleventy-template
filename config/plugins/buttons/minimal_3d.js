const outdent = require('outdent')

module.exports = function minimal_3d(slot) {
  return outdent`<button class="minimal_3d">${slot}</button>`
}
