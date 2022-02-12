const outdent = require('outdent')
const { attrs } = require('./index.js')

module.exports = function skeumorphic(slot, id, type) {
  return outdent`
  <button class="skeumorphic" ${attrs({ type, id })}>
    <div class="skeumorphic__content">
      <div class="skeumorphic__icon">
      </div>
      <p class="skeumorphic__text">${slot}</p>
    </div>
  </button>
`
}
