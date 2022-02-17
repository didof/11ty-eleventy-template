const outdent = require('outdent')
const { attrs } = require('./index')

module.exports = function spring(href, label, other) {
  return outdent`
      <a href="${href}" class="spring_anchor" ${attrs(other)}>${label}</a>
    `
}