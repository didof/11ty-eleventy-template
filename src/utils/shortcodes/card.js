module.exports = function card(content, title, cta, link) {
return `
<article class="w-96 rounded-md shadow-md p-4 flex flex-col gap-2">
<header>${title}</header>

${content}

<footer><a href="${link}">${cta}</a></footer>
</article>
`
}
