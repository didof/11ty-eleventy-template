---
title: Blog Category
layout: layouts/base.njk
templateEngineOverride: njk
pagination:
    data: collections.blogCategories
    size: 1
    alias: category
permalink: /blog/category/{{ category.slug }}/
---

{%- from "system/component.njk" import component -%}

<h2>Blog category: {{ category.title }}</h2>

<section class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">

<ul class="flex flex-col gap-4">
{% for post in collections.blogposts | include("data.categories", category.title) %}
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
{% for category in collections.blogCategories %}
    <li>{{ component('category', {
        title: category.title,
        url: category.slug,
        amount: category.amount
    }) }}</li>
{% endfor %}
</ul>

</section>