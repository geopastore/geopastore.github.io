---
layout: post
title: "Western States Lottery numbers"
date: 2025-12-05 10:00:00 -0000
---
*Tomorrow, the 2026 Western States Lottery will select the runners who will start at Olympic Valley. But what are the odds of getting in, and how have they changed over the past years?*<!--more-->

<body>
  <p class="lead">
    Western States 100 miles is truly the dream race for many ultrarunners, whether beginners or experienced. While the exploitation of our beloved Mont Blanc tour seems limitless (in terms of profits for company owners), Western States (WS) is strictly governed by the “<strong>369 rule</strong>”: the U.S. Forest Service limits the number of runners to 369. This number is fixed, no matter how popular ultrarunning and WS have become or how strong our desire to participate is. This limitation led to the creation of the infamous Western States Lottery, which was initially designed to reward consistency in applying each year. By regularly competing in long races, applicants ensure to be part of a fit group at the starting line.
  </p>

  <h2>How the lottery works</h2>
  <p>
    Every lottery applicant will receive  <code>2^(n-1)</code> tickets in the hat for each failure to gain entry, where <code>n</code> is the number of years applied. As an example: If a runner applies and fails to gain entry two times, they will have four tickets in the hat when entered in the lottery the third year (<code>2^2</code>), eight in fourth year  (<code>2^3</code>), 16 in fifth  (<code>2^4</code>), 32 in sixth (<code>2^5</code>), etc. [form the lottery website]
  </p>

  <h2>Motivation</h2>
  <p>
    It seems reasonable to think that this method is quite fair, but how has it evolved through time? What were the chances to get in ten years ago and what are the chances now? I tried to give an answer to that, even if I’m not a statistician, nor particularly good with numbers.
  </p>
  
  <p align="center"> 
    <img src="/assets/images/Buckled.jpg" alt="The Buckled" width="500"/>
  <p> 


  <h2>Method</h2>
  <p>
    To calculate the probability of entry associated with each number of tickets every year I used a Monte Carlo simulation method. This approximates the effective results by running many simulated draws. For a detailed explanation consult Ryan Witko analysis (<a href="https://www.wser.org/wp-content/uploads/stats/WesternStatesLotteryAnalysis.pdf" target="_blank">Western States Monte Carlo</a>).
  </p>

  <p>
    Given a table of entrants for each ticket count through the years, I calculated the probability to be extracted in the pool of <strong>290 entrants</strong>.
  </p>

  <div class="note">
    Why 290? From the magic <strong>369</strong> we have to subtract reserved tickets for various reasons: Golden Tickets, pregnancy deferrals, special consideration, board members, etc. The mean number of tickets actually drawn is ~261; to this I added roughly 30 people who are extracted from the waiting list. Every year up to 23 people have been picked from the waitlist (on average 35), last year 40 people got in from the waitlist (the last was contacted on June 26). This brings an approximate total of 290.
  </div>

  <h2>Results</h2>
  <p align="center">
    <img src="/assets/images/Overall.JPG" alt="Overall summary figure showing probabilities and trends" width="700"/>
  <p> 
    
  <p>
    The table shows the percent probability to be extracted each year, with the equivalent tickets. The numbers are demoralising for new entrants: since 2023 they have less than 1% chance of being extracted. Probabilities are not particularly in my favour with 4 tickets either — I essentially go from about 0.6% to 1.4% in 3 years. The probability growth pattern (more than doubling every 3 years) is similar, but ten years ago I would have gone from 6% to 15% in the same span.
  </p>
  
  <p align="center"> 
    <img src="/assets/images/Entrants1.JPG" alt="Plot of entrants per year" width="600"/>
  <p> 
    
  <p>
  The number of entrants has been increasing since 2011, with a dip in 2015 (for reasons unknown   to me) and another in 2022 (likely due to COVID-19). The year I first enrolled, the number of exceeding new submissions reached a maximum of 2200, while this year, we almost reached 1500.  Unfortunately, the rate of increase is not constant, resulting in an overall quadratic growth, proportional to the square of the entrants. 
  </p>

  <p align="center"> 
    <img src="/assets/images/Tickets.JPG" alt="Ticket distribution across entrants and years" width="600"/>
  <p> 

  <p>
    This makes the effect of ticket-number increases (which are themselves exponential) particularly dramatic. It has contributed to making the entry process longer and more improbable. Between 2016 and 2019, the ballot was positive for everyone with 64 tickets (over 7 years). After that, only 2 years were needed to create the 256-ticket category, and just one year to establish the 512-ticket category (with 5 entries this year). Since after Covid-19 the lottery has clearly been overloaded.  
  </p>

  <p align="center"> 
    <img src="/assets/images/Tdist.JPG" alt="Ticket distribution and resulting probabilities over time" width="600"/>
  <p> 

  <p>
Even though the distribution of tickets shifts every year toward higher-ticket holders, their chances have drastically dropped. For example, ten years ago a 5-year lottery subscriber would have had roughly a 50% chance to get in; now that chance is about 5%. As mentioned earlier, after 7 years, selection was almost guaranteed. With the current trend for new  subscribers, it will now be statistically certain to get in only after more than 10 years.
  </p>

  <h2>Conclusions (of an old grumbling man)</h2>
  <p>
    My consideration (and probably not many would agree) is that the popularity ultrarunning is receiving is beneficial for the sport in the long term, but we have to take care to avoid the “Tour de France effect”. In the professional cycling calendar, the Tour de France has gained media coverage and exposure unequal to any other event. This is ultimately not good for the sport and not good for the competition either. Similarly, we all dream to get to the finish line in Auburn, but social media exposure and self inducted hype are pressing us all against the magic “<strong>369</strong>” number dam. There is a ton of beautiful races and trails to run out there. We just need a good pair of socks and shoes to find our own personal WS.
  </p>
  
  <p align="center"> 
    <img src="/assets/images/GRP.jpeg" alt="GRP" width="400"/>
  <p>

  <h2>Bonus</h2>
  <p>
    There is an Italian guy (if you know, you know) attempting to participate three times in a row (without shortcuts). He obviously has the same probability to get in with one ticket as everyone else (1 in ~287). But, the statistical event of participating in 2024 with 4 tickets, 2025 with 1 ticket and (hopefully) 2026 with 1 ticket, is ~0.00004% or 1 in 250,000,000. <strong>Western States lottery — let us dream!</strong>
  </p>

