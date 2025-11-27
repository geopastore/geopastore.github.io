---
layout: post
title: "Topography Distribution"
date: 2025-11-26 10:00:00 -0000
---
*What geological/topographical feature could we observe if we visualize the distribution of elevation for discrete latitude swaths?*<!--more-->

### The idea
One day, wandering around the forest of twitter, I found a nice image of the @Foglebird account displaying a visual topography of Western US. He computed the percentiles of elevation distribution for intervals of 1° of Latidude.  
<p align="center">
<img src="/assets/images/WS.JPG" alt=WS width="450">
<p>
I gave it a try to replicate it with R.

### The code
```r
library (geodata)
library (terra)
#This function gets qualtiles of distributions for certain latitude intervals
get_quantile_profile <- function(r, lat, res, probs=c(0.25,0.5,0.75)) {
  ex <- ext(r)

  # Latitude band polygon
  pol <- vect(
    rbind( c(xmin(ex), lat-res), c(xmin(ex), lat+res), c(xmax(ex), lat+res),c(xmax(ex), lat-res)),
    type="polygons", crs=crs(r)
  )
  
  vals <- extract(r, pol)[,2]         # keep NA
  nc   <- dim(r)[2]
  vals <- matrix(vals, nrow=nc)       # lon × lat-cells
  
  qmat <- apply(vals, 1, quantile, probs=probs, na.rm=TRUE)
  lon  <- seq(xmin(ex), xmax(ex), length.out=nc)
  
  list(lon=lon, q=qmat)
}
```

With library geodata it is possible to load elevation data.

```r
ita <- elevation_30s(country="ITA", mask=TRUE)
#elevation_30s is a hole filled CGIAR-SRTM with 90m resolution (a reasonable resolution/extent compromise)
# use: country_codes() to get the correct ISO code for each country
```
<p align="center">
<img src="/assets/images/Ita_SRTM.jpeg" alt=ita_SRTM90 width="700">
<p>

A for cycle is nice to plot each latitude line individually.

```r
latspan <- 0.5 #latitude span
scale   <- 0.0002   # manual z vertical scale elevation 

plot(0,0,type="n",
     xlim=c(xmin(ex), xmax(ex)),
     ylim=c(round(ymin(ex),0), round(ymax(ex),0)+1),
     xlab="Longitude", ylab="Latitude")

for (lat in seq(round(ymin(ex),0), round(ymax(ex),0), latspan)) {
  prof <- get_quantile_profile(ita, lat, res=latspan/2)
  lon  <- prof$lon
  q    <- prof$q
  
  # quantile curves plotted at real latitude
  lines(lon, lat + scale*q[1,], col="lightgrey",  lwd=1.2)
  lines(lon, lat + scale*q[2,], col="black",      lwd=1.4)
  lines(lon, lat + scale*q[3,], col="darkgrey",   lwd=1.2)
}
```

### Result
<p align="center">
<img src="/assets/images/rect2291_2.png" alt=ita width="700">
<p>

Elevation transects of Italy. Lines represent the 25th, 50th, and 75th percentiles of the elevation distribution across 0.5° latitude bands.

Explore topographical features. Can you spot the Western Alps or ***Giudicarie Line***, Po Plain, ***Belluno sincline***, Appennine front, ***Gran Sasso peak***, Gennargentu massif, ***Gargano massif***, Strait of Messina, ***Aeolian Islands***, Etna volcano, and ***Pantelleria Island***?
