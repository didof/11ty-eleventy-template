const outdent = require('outdent')
const { attrs } = require('./index')

module.exports = function slim_arrow(href, label, other) {
  return outdent`
    <a href="${href}" class="slim_arrow" ${attrs(other)}>
        <span>${label}</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
    </a>
    `
}
