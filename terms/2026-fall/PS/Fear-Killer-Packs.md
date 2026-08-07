# FEAR-KILLER-PACKS

Each pack is 3-5 questions per syllabus topic. Questions are ordered hardest first — attack the fear immediately, then coast through the rest.

---

## MT-335 Probability & Statistics

**Resources:** StatQuest with Josh Starmer • Brandon Foltz Statistics • Harvard Stat 110 • Devore 9th Ed • Seeing Theory • William Chen Probability Cheatsheet

### Week 1: topic-descriptive-statistics
**Resources:** Brandon Foltz (Descriptive Stats) • Devore Ch.1

1. Given the dataset: 12, 15, 18, 20, 22, 25, 27, 30, 35, 42, 50, 55, 60, 65, 70. Calculate mean, median, mode, Q1, Q3, IQR, variance, standard deviation, and coefficient of variation. Now add an outlier of 200 and recompute all measures. Which measures are robust to outliers and which are not?
2. A frequency distribution of exam scores for 50 students is: 30-40 (3), 40-50 (7), 50-60 (12), 60-70 (15), 70-80 (8), 80-90 (5). Calculate the mean for grouped data using the midpoint method. Then compute the variance for grouped data. Compare to if you had the raw data — what information is lost?
3. Two datasets have same mean = 50 but Dataset A has variance = 25 and Dataset B has variance = 400. Dataset A is symmetric while Dataset B is positively skewed. Draw the approximate distributions. Interpret what each tells you about the data spread and shape. How does skewness affect which measure of central tendency is most representative?

### Week 2: topic-probability
**Resources:** Brandon Foltz (Probability) • Stat 110 • Devore Ch.2 • William Chen Cheatsheet

1. A diagnostic test for a disease has 99% sensitivity (P(positive | disease)) and 95% specificity (P(negative | no disease)). The disease prevalence is 2%. If a person tests positive, what is the probability they actually have the disease? Show full Bayes' theorem calculation with the probability tree. This is the classic base rate fallacy — articulate why most people intuitively get this wrong.
2. A bag contains 5 red and 7 blue marbles. Three marbles are drawn without replacement. Calculate: P(all red), P(exactly 2 red), P(at least 1 blue), P(first is red | second and third are blue). Solve using both combinatorics (C(n,r)) and sequential probability. Show that both methods agree.
3. Prove Bayes' theorem from the definition of conditional probability. Then use the law of total probability to derive the denominator. For the medical test example above, compute P(disease | positive) if the test were perfect (100% sensitivity, 100% specificity) and if prevalence were 50% instead of 2%.
4. Given a contingency table of 200 people: Male/Employed=60, Male/Unemployed=20, Female/Employed=80, Female/Unemployed=40. Calculate P(Employed), P(Male | Employed), P(Employed ∩ Male), P(Employed ∪ Male). Are gender and employment status independent? Show the mathematical proof.

### Week 3: topic-random-variables-and-processes
**Resources:** Stat 110 • Devore Ch.3-4 • William Chen Cheatsheet

1. A discrete random variable X has PMF: P(X=1)=0.1, P(X=2)=0.2, P(X=3)=0.3, P(X=4)=0.25, P(X=5)=0.15. Compute E[X], E[X²], Var(X), and the CDF at each point. Then find P(2 ≤ X < 5). Derive the moment generating function M_X(t). Use M_X(t) to find E[X] and E[X²] and verify they match.
2. A continuous random variable has PDF f(x) = kx² for 0 ≤ x ≤ 2, 0 otherwise. Find k, compute P(0.5 < X < 1.5), E[X], Var(X), and derive the CDF F(x). Then find the median (the value m such that P(X ≤ m) = 0.5).
3. Explain the concept of a stationary random process. Given a random process X(t) = A cos(2πft + θ) where A is a random variable and θ is uniform in [0, 2π), determine if X(t) is wide-sense stationary. Compute the mean function μ_X(t) and autocorrelation R_X(t₁, t₂). Show the steps.
4. A queuing system has arrivals following a Poisson process with rate λ = 5 customers per hour and service times following an exponential distribution with mean 10 minutes. Calculate the probability that exactly 3 customers arrive in the next 30 minutes. Then compute the probability that no customer arrives in the next 15 minutes. For the M/M/1 queue, what is the probability the system is empty?
5. A two-state Markov chain (call center "idle" / "busy") has transition matrix P = [[0.8, 0.2], [0.3, 0.7]]. Draw the state transition diagram. Given the chain starts in state "idle", find the probability of being busy after 2 steps. Then solve the steady-state equations πP = π (with Σπᵢ = 1) and interpret the long-run probabilities. How do these steady-state probabilities connect to the queuing occupancy computed in Q4?

### Week 4: topic-probability-distributions
**Resources:** StatQuest (Distributions) • Brandon Foltz (Distributions) • Devore Ch.4-5

1. A factory produces chips with 2% defect rate. From a batch of 20 chips, calculate: P(exactly 1 defective) using Binomial, P(at most 2 defective), P(at least 1 defective). Now if the batch size is 500 with same defect rate, approximate using Poisson (λ=10). Compute P(exactly 5 defective) using both Binomial and Poisson and compare.
2. IQ scores follow Normal(100, 15²). Calculate: P(IQ > 130), P(85 < IQ < 115), the IQ value at the 95th percentile, and P(IQ > 145 | IQ > 130). Standardize each using Z = (X - μ)/σ and read the Z-table.
3. Explain when to use Binomial vs Poisson vs Normal. Given: (a) number of emails in an hour, (b) number of heads in 100 coin flips, (c) heights of adult women, (d) number of defective items in a batch of 10. For each, identify the correct distribution and justify your choice.
4. The lifetime of a light bulb follows Exponential(λ = 0.001 failures per hour). Calculate: P(bulb lasts > 2000 hours), P(bulb lasts > 3000 | it has already lasted 1000), E[X], Var(X). Show that the memoryless property holds by computing P(X > t+s | X > s) and comparing to P(X > t).
5. A warehouse shipment contains 50 items, of which 8 are defective. An inspector draws 10 items without replacement. Calculate P(exactly 2 defective) using the hypergeometric distribution. Compare this to the binomial approximation (why is it wrong here?) and to the Poisson approximation. Then: a production line has a 5% defect rate; find P(the 6th item inspected is the 3rd defective) using the negative binomial distribution. When must you use hypergeometric instead of binomial?

### Week 5: topic-sampling-and-clt
**Resources:** StatQuest (CLT) • Brandon Foltz (Sampling) • Devore Ch.6-7

1. A population has mean μ = 100 and standard deviation σ = 20. Draw samples of size n = 36. State the sampling distribution of the sample mean (shape, mean, standard error). Calculate P(95 < X̄ < 105). Now for n = 100, recalculate the standard error and probability. How does increasing n affect the sampling distribution?
2. Compare stratified sampling, cluster sampling, and systematic sampling. A university has 10,000 students across 5 faculties: Engineering (3000), Science (2500), Arts (2000), Business (1500), Law (1000). You need a sample of 500 students. Show your sampling plan for each method. Which method gives the most representative sample and why?
3. State the Central Limit Theorem mathematically. A factory produces bolts with mean diameter 10mm and variance 4mm². For a sample of 40 bolts, what is P(sample mean > 10.5mm)? What if the population is heavily skewed — does CLT still apply and at what sample size? Show the derivation and the Z-score.

### Week 6: topic-hypothesis-testing
**Resources:** StatQuest (Hypothesis Testing) • Devore Ch.8-9

1. A coffee machine dispenses 200ml per cup on average. A sample of 25 cups gives mean = 195ml, s = 10ml. Test at α = 0.05 whether the machine is underfilling. State H₀ and H₁, choose one-tailed or two-tailed, calculate the t-statistic, find the critical value, and state your conclusion. Then calculate the p-value. Would the conclusion change at α = 0.01?
2. 100 light bulbs from Brand A have mean life 1200 hours, s = 80 hours. 100 bulbs from Brand B have mean life 1150 hours, s = 90 hours. Test at α = 0.05 whether Brand A lasts longer than Brand B. Use a two-sample t-test. State H₀, H₁, calculate the test statistic, degrees of freedom, and conclude.
3. A survey of 200 people shows 120 prefer Product A over Product B. Test at α = 0.05 whether more than 50% prefer Product A. Use a one-proportion z-test. Calculate the test statistic and p-value. Also construct a 95% confidence interval for the true proportion. Does the CI support the test conclusion?
4. A chi-square test for independence: 300 people classified by gender (M/F) and product preference (A/B/C). Observed counts: M/A=40, M/B=35, M/C=25, F/A=60, F/B=65, F/C=75. Calculate expected frequencies assuming independence, compute χ², find the critical value at α = 0.05 with appropriate degrees of freedom. Are gender and preference independent?

### Week 7: topic-confidence-intervals
**Resources:** StatQuest (Confidence Intervals) • Devore Ch.7-8

1. A sample of 16 batteries has mean life 50 hours, s = 4 hours. Construct 95% CI for the population mean (σ unknown, use t-distribution). Now σ is known to be 4, recalculate using z. Compare the widths of the two intervals. What sample size is needed to reduce the CI width to ±1 hour? Calculate for both known and unknown σ.
2. A survey of 500 voters finds 280 support Candidate A. Construct 95% CI for the true proportion. Calculate the margin of error. How many voters need to be surveyed to reduce the margin of error to ±2%? Use p̂ = 0.5 (conservative) and p̂ = 0.56 (from pilot) — what sample sizes result?
3. Explain what "95% confidence" actually means. Given 100 different 95% CIs each from independent samples, how many would you expect to contain the true population mean? Show a concrete simulation example. Differentiate this from saying "there's a 95% probability the parameter lies in this interval" — why is that statement incorrect?

### Week 8: topic-regression-and-correlation
**Resources:** StatQuest (Regression) • Brandon Foltz (Regression) • Devore Ch.10-11

1. Given data: X (hours studied) = [2,4,6,8,10,12], Y (exam score) = [55,60,70,75,85,95]. Calculate the correlation coefficient r, the regression line Y = a + bX, and interpret b and a. Predict Y when X = 7 and X = 20. Which prediction is more reliable and why?
2. For the same data, calculate R² and interpret it. Then compute the residual for each point. Draw the scatter plot with the regression line and show the residuals. Explain the least squares principle — why minimize vertical distances and not perpendicular distances? Show the derivation of b = Σ((x-x̄)(y-ȳ)) / Σ((x-x̄)²).
3. Rank correlation: Two judges rank 8 contestants as follows: Judge A: [3,1,2,5,4,7,6,8], Judge B: [2,3,1,4,6,5,8,7]. Calculate Spearman's rank correlation coefficient. Interpret the value. What does ρ = +1, -1, and 0 mean in terms of agreement between judges?
4. Differentiate Y on X vs X on Y regression. Given the same data, compute both regression lines and show they are not inverses of each other. Which line should you use when you want to predict Y from X? When would you ever need the X on Y line?
5. Using r ≈ 0.97 from Q1 (n = 6) and the Spearman ρ from Q3, compute the Probable Error P.E = 0.6745 × (1 − r²)/√n for each. State the significance limits r ± P.E and decide whether each correlation is significant (interval free of zero) or not. When n is small, why does the P.E interval widen, and what does that mean for drawing conclusions about correlation?
