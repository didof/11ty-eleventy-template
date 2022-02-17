const outdent = require('outdent')
const { attrs } = require('./index')

module.exports = function double(href, labels, other) {
  let label1, label2
  if (Array.isArray(labels)) {
    label1 = labels[0]
    label2 = labels[1]
  } else {
    label1 = labels
    label2 = labels
  }

  return outdent`
    <a href="${href}" class="double" ${attrs(other)}>
        <span class="mask">
            <div class="link-container">
            <span class="link-title1 title">${label1}</span>
            <span class="link-title2 title">${label2}</span>
            </div>
        </span>
        <div class="link-icon">
            <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
        </div>
    </a>
    `
}
