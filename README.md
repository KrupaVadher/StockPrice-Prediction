# Stock-Prediction

## Stock market prediction based on news impact analysis

We propose an adaptive approach to predict the stock price based on news impact analysis. Our approach analyzes the impact of news over the stock price and makes prediction of its future price. The system then analyses time series and news information for potential concept drift detection and rebuilds the model by adapting new concepts. The outcome will be realistic and efficient stock price prediction and potential drift detection. 

## Data Sources

1. Stock Data: Yahoo Finance

2. News Data: Thomson Reuters

## Build Instructions [Clone the repository]

### <ins> Data Collection </ins>

**1. Stock Data:** Run  `./data_fetcher.sh` in your terminal
* It will download a csv file containing the fields like: Date, Open, High, Low, Close, Adj. Close, and Volume 

**2. News Data:** Install the packages using the below commands necessary to run 'Nightmare' library and 'Cheerio' API. (If you don't have them already)<br>
- `npm init -y` <br>
- `npm install nightmare cheerio --unsafe-perm=true`
  
&nbsp;&nbsp;&nbsp; <ins>News Headlines</ins>

- From your terminal, navigate to the directory /Headlines/JSCode, and run `node headlines.js`
  - It will download a json files for each company, containing the fields like: Company's Ticker_ID, News Headlines, Article link, and Date

&nbsp;&nbsp;&nbsp; <ins>News Body</ins>

- After successfully downloading the json files for headlines, copy all json files into the directory /Body/JSCode.
- From your terminal, navigate to the directory /Body/JSCode, and run `node news_body.js`
  - It will download a json files for each company, containing the fields like: Article link and Body (News Article Text)