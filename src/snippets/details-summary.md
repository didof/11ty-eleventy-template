---
title: Details and Summary HTML5 tags!
slug: details-and-summary
date: 2021-02-05
templateEngineOverride: njk, md
order: 1
open: true
draft: false
codepen: true
---
<!-- based on https://11ty.rocks/posts/eleventy-templating-static-code-demos/ -->

{% set description %}
I just found out of this!
{% endset %}

{% set output %}
<details class="card">
    <summary>The header</summary>

    The body
</details>
{% endset %}

{% set html %}
<details class="card">
    <summary>The header</summary>

    The body
</details>
{% endset %}

{% set css %}
.card {
    width: 7rem;
    padding: 1rem;
    background: white;
    color: black;
    border-radius: 10px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
}
{% endset %}

{% include "snippet.njk" %}