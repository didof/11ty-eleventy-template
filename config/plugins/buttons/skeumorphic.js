const outdent = require('outdent')

module.exports = function skeumorphic(slot, type = 'submit') {
  return outdent`
  <button class="skeumorphic" type="${type}">
    <div class="skeumorphic__content">
      <div class="skeumorphic__icon">
      </div>
      <p class="skeumorphic__text">${slot}</p>
    </div>
    </button>
`
}
