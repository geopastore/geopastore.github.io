---
layout: page
title:
---

<div class="sidenav">
  <img src="/assets/images/95483300-mds2022f-15668.JPG" alt="My photo">
  <p>Hi! I'm Guido Pastore, this is my personal page.<br>I would like to use it to share some ideas.</p>
  <p>📧 <a href="mailto:guidopastore93@gmail.com">guidopastore93@gmail.com</a></p>
</div>

<div class="main">
  <div class="post-list">
    {% for post in site.posts %}
    <a class="post-card" href="{{ post.url | relative_url }}">
      <div class="post-card-image">
        {% if post.image %}
          <img src="{{ post.image }}" alt="{{ post.title }}">
        {% else %}
          <div class="post-card-placeholder"></div>
        {% endif %}
      </div>
      <div class="post-card-body">
        <p class="post-card-date">{{ post.date | date: "%d %B %Y" }}</p>
        <h2 class="post-card-title">{{ post.title }}</h2>
        {% if post.excerpt %}
          <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
        {% endif %}
      </div>
    </a>
    {% endfor %}
  </div>
</div>