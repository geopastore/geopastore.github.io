---
layout: post
title: "Western States Lottery numbers"
date: 2025-12-05 10:00:00 -0000
---
*Tomorrow there will be the 2026 Western States Lottery to be selecte to be at the Olimpic Valley starting line. But what are the odds to get in? And how they evolved in the past years?*<!--more-->

<body>
  <p class="lead">
    Western States 100 miles is genuinely the dream race of many ultrarunners (beginners or experienced). While the exploitation of our dear Mont Blanc tour seems to not have limits (in terms of profit made by company owners), WS is under the strict rule of <strong>369</strong>: U.S. Forest Service limits the number of runners to 369. This number is fixed no matter how much ultrarunning and WS became popular and the desire of us all. This led to the creation of the infamous <em> Western States Lottery</em>. It had the initial purpose of awarding consistency in entry the lottery each year, by competing a long race, ensuring fit group at the starting line.
  </p>

  <h2>How the lottery works</h2>
  <p>
    Every lottery applicant will receive  <code>2^(n-1)</code> tickets in the hat for each failure to gain entry where <code>n</code> is the number of years applied. As an example: If a runner applies and fails to gain entry two times, they will have four tickets in the hat when entered in the lottery the third year (<code>2^2</code>), eight in fourth year  (<code>2^3</code>), 16 in fifth  (<code>2^4</code>), 32 in sixth (<code>2^5</code>), etc. [form the lottery website]
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
    To calculate the probability of entry associated with each number of tickets each year I used a Monte Carlo simulation method. This approximates the effective results by running many simulated draws. For a detailed explanation consult Ryan Witko analysis (<a href="https://www.wser.org/wp-content/uploads/stats/WesternStatesLotteryAnalysis.pdf" target="_blank">Western States Monte Carlo</a>).
  </p>

  <p>
    Given a table of entrants for each ticket count through the years, I calculated the probability to be extracted in the pool of <strong>290 entrants</strong>.
  </p>

  <div class="note">
    Why 290? From the magic 369 we subtract reserved tickets for various reasons: Golden Tickets, pregnancy deferrals, special consideration, board members, etc. The mean number of tickets actually drawn is ~261; to this I added roughly 30 people who are extracted from the waiting list. Over the years up to 23 people have been picked from the waitlist, on average 35; last year 40 people got in from the waitlist (the last was contacted on June 26). So for the scope of this post I used 290 as the pool size.
  </div>

  <h2>Results</h2>
  <p align="center">
    <img src="/assets/images/Overall.JPG" alt="Overall summary figure showing probabilities and trends" width="600"/>
  <p> 
    
  <p>
    The table shows the percent probability to be extracted each year, with the equivalent tickets. The numbers are demoralising for new entrants: since 2023 they have less than 1% chance of being extracted. Probabilities are not particularly in my favour with 4 tickets either — I essentially go from about 0.6% to 1.4% in 3 years. The probability growth pattern (more than doubling every 3 years) is similar, but ten years ago I would have gone from ~6% to ~15% in the same span.
  </p>
  
  <p align="center"> 
    <img src="/assets/images/Entrants.JPG" alt="Plot of entrants per year" width="600"/>
  <p> 
    
  <p>
    The rate of entrants has been increasing since 2011, with a dip in 2022 (likely a Covid-19 effect) and an unexplained dip in 2015. The overall increase (average +858 people per year) appears roughly linear, while the entrant growth actually produces an exponential-like effect on competition.
  </p>

  <p align="center"> 
    <img src="/assets/images/Tickets.JPG" alt="Ticket distribution across entrants and years" width="600"/>
  <p> 

  <p>
    This makes the effect of ticket-number increases (which are themselves exponential) particularly dramatic.
  </p>

  <p align="center"> 
    <img src="/assets/images/Tdist.JPG" alt="Ticket distribution and resulting probabilities over time" width="600"/>
  <p> 

  <p>
    Even though the distribution of tickets shifts every year toward higher-ticket holders, their chances have drastically dropped. For example, ten years ago a 5-year lottery subscriber would have had roughly a 50% chance to get in; now that chance is about 5%. You were basically sure to be selected after 7 years; with the current trend new subscribers will be statistically certain to get in only after more than 10 years.
  </p>

  <h2>Conclusions (of an old grumbling man)</h2>
  <p>
    My consideration (and probably I am alone in this) is that the popularity ultrarunning is receiving is beneficial for the sport in the long term, but we have to take care to avoid the “Tour de France effect.” In the professional cycling calendar, the Tour de France has gained media coverage and exposure unequal to any other event. This is ultimately not good for the sport (everything happening in those three weeks receives disproportionate resonance) and not good for the competition either (a 10th place overall at the Tour is too valuable to risk with an attack). We all want the chance to get to the finish line in Auburn, but social media exposure and WS hype are pressing us all against the magic “<strong>369</strong> ” number dam. We should probably find our own WS among all the beautiful races (and personal projects); we just need a good pair of socks and shoes and to get out of the door.
  </p>
  
  <p align="center"> 
    <img src="/assets/images/GRP.jpeg" alt="GRP" width="400"/>
  <p>

  <h2>Bonus</h2>
  <p>
    There is an Italian guy (whoever needs to know knows) attempting to participate three times in a row (without shortcuts). He obviously has the same probability to get in with one ticket as everyone else (1 in ~287). But statistically, the event of participating in 2024 with 4 tickets, 2025 with 1 ticket and (hopefully) 2026 with 1 ticket is ~0.00004% or 1 in 250,000,000. Western States lottery — let us dream!
  </p>


</body>
</html>
