---
layout: post
title: "Topography Distribution"
date: 2025-11-26 10:00:00 -0000
---

What geological/topographical feature could we observe if we visualize the distribution of elevation for discrete latitude swaths?

<!--more-->

#### The idea
One day, wandering around the forest of twitter, I found a nice image of the accoung @Foglebird displaying a visual topography of Western US. He computed the percentiles of elevation dristribution for intervals of 1° of Latidude.  

I gave it a try how to replicate it with R.

```r
library (geodata)
library (terra)
```
<img src="/assets/images/rect2291_2.png" alt=ita width="500">

Elevation transects of Italy. Lines represent the 25th, 50th, and 75th percentiles of the elevation distribution across 0.5° latitude bands.

Inspired by an idea from @FogleBird (twitter)
