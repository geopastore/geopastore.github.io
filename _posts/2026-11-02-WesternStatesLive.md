---
layout: post
title: "Western States 2027 lottery: live odds"
date: 2026-11-02 10:00:00 -0000
image: /assets/images/WSER_cougar.png
---
*Registration for the 2027 Western States Lottery is open until 21 November, and the draw is on 5 December. What are the odds of getting in this year? This page reads the applicant list on wser.org every six hours and recomputes them.*<!--more-->

<body>
  <p class="lead">
    Last December I looked at <a href="{{ '/2025/12/05/WesternStates.html' | relative_url }}">how the odds of getting into Western States have changed over the years</a>. This year the numbers update themselves: every time WSER refreshes its list of applicants, a small script re-runs the lottery 20,000 times on the current hat and the table below changes accordingly.
  </p>

  <p align="center">
    <img src="{{ '/assets/images/WSER_cougar.png' | relative_url }}" alt="Western States cougar" width="500"/>
  </p>

  <div id="wser-live"
       data-json="{{ '/assets/wser/live.json' | relative_url }}"
       data-analogies="{{ '/assets/wser/analogies.csv' | relative_url }}"></div>
  <script src="{{ '/assets/wser/wser-live.js' | relative_url }}" defer></script>

  <h2>How it works</h2>
  <p>
    Each applicant gets <code>2^(n-1)</code> tickets, where <code>n</code> is the number of years applied. In the draw, tickets come out of the hat one at a time; when a name that has already been picked comes out again, it is skipped. The same Monte Carlo method as in the <a href="{{ '/2025/12/05/WesternStates.html' | relative_url }}">previous post</a> gives the probability of being among the first <strong>290</strong> different names.
  </p>

  <div class="note">
    Why 290? As explained in <a href="{{ '/2025/12/05/WesternStates.html' | relative_url }}">Western States Lottery numbers</a>, the Forest Service caps the start list at <strong>369</strong>, but part of those places are reserved before the lottery (Golden Tickets, pregnancy deferrals, special consideration, board members and so on). On average about 261 names are actually drawn, and roughly another 30 runners get in later from the wait list (around 35 on average, 40 in the last edition). That brings the realistic total to about 290. WSER’s own figures use the 260 drawn in the lottery only, so the percentages here are slightly higher than theirs: they include the chance of getting in from the wait list.
  </div>

  <p>
    The odds fall every day while registration is open, because each new applicant adds tickets to the hat. They settle once registration closes and WSER publishes the final ticket counts.
  </p>


  <h2>Did the model get 2026 right?</h2>
  <p>
    The 2026 lottery was drawn on 6 December 2025 from a hat of 11,328 entrants and 93,003 tickets. The <a href="https://lottery.wser.org/" target="_blank">live lottery page</a> lists every name drawn, in order: 253 in the lottery and 75 on the wait list. To compare like with like, I took the 253 lottery picks plus the first 37 names on the wait list, which makes the same 290 used in the model.
  </p>

  <div class="wser-live">
    <div class="wl-scroll">
      <table>
        <thead><tr><th class="wl-num" scope="col">Tickets</th><th class="wl-num" scope="col">In the hat</th><th class="wl-num" scope="col">Model chance</th><th class="wl-num" scope="col">Expected picks</th><th class="wl-num" scope="col">Real picks</th><th class="wl-num" scope="col">Difference</th></tr></thead>
        <tbody>
          <tr><td class="wl-num">1</td><td class="wl-num">4,469</td><td class="wl-num">0.35%</td><td class="wl-num">15.8</td><td class="wl-num">13</td><td class="wl-num">−2.8</td></tr>
          <tr><td class="wl-num">2</td><td class="wl-num">2,563</td><td class="wl-num">0.70%</td><td class="wl-num">18.1</td><td class="wl-num">14</td><td class="wl-num">−4.1</td></tr>
          <tr><td class="wl-num">4</td><td class="wl-num">1,752</td><td class="wl-num">1.41%</td><td class="wl-num">24.7</td><td class="wl-num">19</td><td class="wl-num">−5.7</td></tr>
          <tr><td class="wl-num">8</td><td class="wl-num">1,102</td><td class="wl-num">2.80%</td><td class="wl-num">30.8</td><td class="wl-num">34</td><td class="wl-num">+3.2</td></tr>
          <tr><td class="wl-num">16</td><td class="wl-num">672</td><td class="wl-num">5.52%</td><td class="wl-num">37.1</td><td class="wl-num">35</td><td class="wl-num">−2.1</td></tr>
          <tr><td class="wl-num">32</td><td class="wl-num">354</td><td class="wl-num">10.7%</td><td class="wl-num">38.0</td><td class="wl-num">39</td><td class="wl-num">+1.0</td></tr>
          <tr><td class="wl-num">64</td><td class="wl-num">239</td><td class="wl-num">20.3%</td><td class="wl-num">48.5</td><td class="wl-num">55</td><td class="wl-num">+6.5</td></tr>
          <tr><td class="wl-num">128</td><td class="wl-num">128</td><td class="wl-num">36.5%</td><td class="wl-num">46.7</td><td class="wl-num">47</td><td class="wl-num">+0.3</td></tr>
          <tr><td class="wl-num">256</td><td class="wl-num">44</td><td class="wl-num">59.6%</td><td class="wl-num">26.2</td><td class="wl-num">29</td><td class="wl-num">+2.8</td></tr>
          <tr><td class="wl-num">512</td><td class="wl-num">5</td><td class="wl-num">83.6%</td><td class="wl-num">4.2</td><td class="wl-num">5</td><td class="wl-num">+0.8</td></tr>
          <tr><td class="wl-num"><strong>Total</strong></td><td class="wl-num"><strong>11,328</strong></td><td></td><td class="wl-num"><strong>290</strong></td><td class="wl-num"><strong>290</strong></td><td></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <p>
    The model chances come from 40,000 simulated draws on the final 2026 hat. The real draw lands close to the expectation in every ticket class: the differences are about the size you would expect from chance alone (chi-square 4.5 with 9 degrees of freedom, p ≈ 0.87). The same holds for the 253 lottery picks alone (p ≈ 0.88) and for all 328 names including the full wait list (p ≈ 0.65). In other words, the 2026 draw behaved just like a well-shaken hat.
  </p>

  <h2>Applicants through the years</h2>
  <p>
    The applicant history published by WSER, by number of years in the lottery. The 2027 numbers are the live ones in the table at the top of this page.
  </p>

  <div class="wser-live">
    <div class="wl-scroll">
      <table>
        <thead><tr><th scope="col">Year</th><th class="wl-num" scope="col">Applicants</th><th class="wl-num" scope="col">1 yr</th><th class="wl-num" scope="col">2 yr</th><th class="wl-num" scope="col">3 yr</th><th class="wl-num" scope="col">4 yr</th><th class="wl-num" scope="col">5 yr</th><th class="wl-num" scope="col">6 yr</th><th class="wl-num" scope="col">7 yr</th><th class="wl-num" scope="col">8 yr</th><th class="wl-num" scope="col">9 yr</th><th class="wl-num" scope="col">10 yr</th><th class="wl-num" scope="col">Tickets</th><th scope="col">Notes</th></tr></thead>
        <tbody>
          <tr><td>2011</td><td class="wl-num">1,786</td><td class="wl-num">1,286</td><td class="wl-num">500</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="wl-num">2,286</td><td>Electronic drawing</td></tr>
          <tr><td>2012</td><td class="wl-num">1,940</td><td class="wl-num">1,221</td><td class="wl-num">461</td><td class="wl-num">258</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="wl-num">3,378</td><td>Electronic drawing</td></tr>
          <tr><td>2013</td><td class="wl-num">2,295</td><td class="wl-num">1,486</td><td class="wl-num">480</td><td class="wl-num">207</td><td class="wl-num">122</td><td></td><td></td><td></td><td></td><td></td><td></td><td class="wl-num">3,555</td><td>Manual drawing</td></tr>
          <tr><td>2014</td><td class="wl-num">2,704</td><td class="wl-num">1,727</td><td class="wl-num">561</td><td class="wl-num">258</td><td class="wl-num">106</td><td class="wl-num">52</td><td></td><td></td><td></td><td></td><td></td><td class="wl-num">4,307</td><td>Manual drawing</td></tr>
          <tr><td>2015</td><td class="wl-num">2,566</td><td class="wl-num">1,427</td><td class="wl-num">641</td><td class="wl-num">281</td><td class="wl-num">136</td><td class="wl-num">57</td><td class="wl-num">24</td><td></td><td></td><td></td><td></td><td class="wl-num">6,601</td><td>First year of 2^(n-1)</td></tr>
          <tr><td>2016</td><td class="wl-num">3,510</td><td class="wl-num">2,233</td><td class="wl-num">639</td><td class="wl-num">377</td><td class="wl-num">171</td><td class="wl-num">71</td><td class="wl-num">14</td><td class="wl-num">5</td><td></td><td></td><td></td><td class="wl-num">8,291</td><td></td></tr>
          <tr><td>2017</td><td class="wl-num">4,248</td><td class="wl-num">2,427</td><td class="wl-num">1,023</td><td class="wl-num">397</td><td class="wl-num">256</td><td class="wl-num">112</td><td class="wl-num">31</td><td class="wl-num">2</td><td></td><td></td><td></td><td class="wl-num">11,021</td><td>First year of wait list</td></tr>
          <tr><td>2018</td><td class="wl-num">4,909</td><td class="wl-num">2,658</td><td class="wl-num">1,060</td><td class="wl-num">668</td><td class="wl-num">283</td><td class="wl-num">161</td><td class="wl-num">71</td><td class="wl-num">8</td><td></td><td></td><td></td><td class="wl-num">15,074</td><td></td></tr>
          <tr><td>2019</td><td class="wl-num">5,862</td><td class="wl-num">3,113</td><td class="wl-num">1,281</td><td class="wl-num">697</td><td class="wl-num">455</td><td class="wl-num">191</td><td class="wl-num">95</td><td class="wl-num">30</td><td></td><td></td><td></td><td class="wl-num">20,119</td><td>First year of byes</td></tr>
          <tr><td>2020</td><td class="wl-num">6,664</td><td class="wl-num">3,250</td><td class="wl-num">1,447</td><td class="wl-num">914</td><td class="wl-num">549</td><td class="wl-num">315</td><td class="wl-num">126</td><td class="wl-num">54</td><td class="wl-num">9</td><td></td><td></td><td class="wl-num">27,872</td><td>COVID-19, race cancelled</td></tr>
          <tr><td>2021</td><td colspan="13">No lottery; consecutive-year requirement dropped</td></tr>
          <tr><td>2022</td><td class="wl-num">6,208</td><td class="wl-num">3,318</td><td class="wl-num">1,063</td><td class="wl-num">722</td><td class="wl-num">514</td><td class="wl-num">328</td><td class="wl-num">186</td><td class="wl-num">59</td><td class="wl-num">18</td><td></td><td></td><td class="wl-num">29,724</td><td>First year of portal</td></tr>
          <tr><td>2023</td><td class="wl-num">7,169</td><td class="wl-num">3,560</td><td class="wl-num">1,578</td><td class="wl-num">731</td><td class="wl-num">525</td><td class="wl-num">374</td><td class="wl-num">232</td><td class="wl-num">127</td><td class="wl-num">37</td><td class="wl-num">5</td><td></td><td class="wl-num">41,392</td><td>Electronic drawing</td></tr>
          <tr><td>2024</td><td class="wl-num">9,388</td><td class="wl-num">4,434</td><td class="wl-num">2,216</td><td class="wl-num">1,231</td><td class="wl-num">606</td><td class="wl-num">420</td><td class="wl-num">256</td><td class="wl-num">147</td><td class="wl-num">70</td><td class="wl-num">8</td><td></td><td class="wl-num">53,966</td><td></td></tr>
          <tr><td>2025</td><td class="wl-num">9,993</td><td class="wl-num">4,122</td><td class="wl-num">2,461</td><td class="wl-num">1,472</td><td class="wl-num">870</td><td class="wl-num">441</td><td class="wl-num">319</td><td class="wl-num">202</td><td class="wl-num">84</td><td class="wl-num">21</td><td class="wl-num">1</td><td class="wl-num">68,724</td><td></td></tr>
          <tr><td>2026</td><td class="wl-num">11,328</td><td class="wl-num">4,469</td><td class="wl-num">2,563</td><td class="wl-num">1,752</td><td class="wl-num">1,102</td><td class="wl-num">672</td><td class="wl-num">354</td><td class="wl-num">239</td><td class="wl-num">128</td><td class="wl-num">44</td><td class="wl-num">5</td><td class="wl-num">93,003</td><td></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <p>
    <em>Source: <a href="https://www.wser.org/lottery/" target="_blank">WSER lottery history</a>. Between 2011 and 2014 the ticket rule was different: the ticket totals for 2013 and 2014 match one ticket per year applied (1, 2, 3…), not the doubling used since 2015.</em>
  </p>

  <h2>The comparisons</h2>
  <p>
    Next to each chance there is an everyday event with roughly the same probability: dice, coins, cards, roulette or the birthday paradox. All of them are exact probabilities (a fair die, a well-shuffled 52-card deck, a European roulette wheel with 37 pockets). The closest one is picked automatically, so the comparison changes as the odds move.
  </p>

  <p>
    <em>Data: <a href="https://www.wser.org/lottery/" target="_blank">wser.org lottery page</a>. Code: <a href="https://github.com/geopastore/geopastore.github.io/blob/main/scripts/wser_lottery.py" target="_blank">scripts/wser_lottery.py</a>.</em>
  </p>
</body>
