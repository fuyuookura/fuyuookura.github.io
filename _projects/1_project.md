---
layout: page
title: project 1
description: IKEA experience embed
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

<div class="embed-container">
  <iframe
    src="https://020814.cargo.site/ikea"
    title="IKEA Experience"
    frameborder="0"
    loading="lazy"
    allowfullscreen
  ></iframe>
</div>

<style>
  .embed-container {
    position: relative;
  width: 150%;
  max-width: none;
  margin-left: -25%;
    min-height: 75vh;
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    overflow: hidden;
  }

  .embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
