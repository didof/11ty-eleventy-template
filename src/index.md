---
title: Hello World
layout: base.njk
templateEngineOverride: njk, md
---

## Collections

Here follows a collection of pages:

{% for page in collections.pages %}
- [{{ page.data.title }}]({{ page.url }})
{%- endfor %}

{% for link in collections.nav %}
<li>
    <a href="{{ link.url }}">{{ link.data.title }}</a>
</li>
{%- endfor %}


### Snippets
{% for snippet in collections.snippets %}
{{ snippet.templateContent | safe }}
{%- endfor %}