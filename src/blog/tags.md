---
title: Tags
layout: layouts/base.njk
templateEngineOverride: njk
pagination:
    data: collections.blogTags
    size: 1
    alias: tag
permalink: /blog/tags/{{ tag.slug }}/
---

{%- from "system/component.njk" import component -%}

<h2>Blog tag: {{ tag.title }}</h2>

<section class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">

<ul class="flex flex-col gap-4">
{% for post in collections.blogPosts | include("data.tags", tag.title) %}
    <li>
        {{component('post', {
            title: post.data.title,
            url: post.url,
            date: post.date,
            tags: post.data.tags
        })}}
    </li>
{% endfor %}
</ul>

<ul class="flex flex-col gap-4">
{% for tag in collections.blogTags %}
    <li class="card">{{ tag.title }} {{ tag.amount }}</li>
{% endfor %}
</ul>

</section>