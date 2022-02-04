---
title: Hello World
layout: base.njk
---

## Pages

Here follows a list of pages

{% for page in collections.pages %}
- [{{ page.data.title }}]({{ page.url }})
{%- endfor %}