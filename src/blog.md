---
title: Blog
layout: layouts/base.njk
templateEngineOverride: njk
---

# Blog

{% set posts_list__title = "Check my latest posts" %}
{% set posts_list__amount = 3 %}
{% include "components/posts_list.njk" %}