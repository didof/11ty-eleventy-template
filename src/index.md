---
title: Demo
layout: base.njk
templateEngineOverride: njk, md
---

## Navigation

In order to use this collection remember to update `.eleventy.js` with:

```js
eleventyConfig.addCollection('nav', collection => collection.getAll())
```

Than you can iterate `collections.nav` like follows:

<marquee direction="right">
{% for link in collections.nav %}
<a href="{{ link.url }}">{{ link.data.title }}</a>
{%- endfor %}
</marquee>

## Collections

Since `src` contains a folder named `pages`, which contains a file named `pages.json` with the following content:

```json
{
  "tags": "pages",
  "layout": "page.njk",
}
```

Thanks to `tags` I can find the iterable pages under `collections.pages`.
The actual layouting is due to `layout` property.

### Snippets ({{ collections.snippets_processed.length }})

Differently from pages, `snippet.json` has the following content:

```json
{
  "tags": "snippets",
  "permalink": false
}
```

As you can see it lacks of the `layout` property. This is so because the snippet data is not supposed to be render as a a page - indeed `permalink` is set to false.
Yet `collections.snippets` is available in every template. The renderer DOM is dynamically generate upon calling `snippet.templateContent`. At that point the ball pass to `snippet.njk`

{% for snippet in collections.snippets_processed%}
{{ snippet.templateContent | safe }}
{% endfor %}

### Shortcodes

{% card "This is shortcode card", "inspired from", "https://www.raresportan.com/eleventy-part-three/" %}

That's cool. Can be useful.

{% endcard %}


### Images

{% image "images/smiley-didof.jpg" | url, 'A smiling didof' %}