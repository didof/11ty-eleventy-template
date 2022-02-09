const outdent = require('outdent')

module.exports = function cardShortcode(content, title,) {
  return outdent`
    <article class="w-96 rounded-md shadow-md p-4 flex flex-col gap-2">
        <header>${title}</header>

        ${content}
    </article>
`
}
