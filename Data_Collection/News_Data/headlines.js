/***** Code to fetch news HEADLINES *****/

//Nightmare declaration and defination
const Nightmare = require('nightmare');
const cheerio = require('cheerio');
const vo = require('vo');
const fs = require('fs');

vo(run)(function (err, result) {
  if (err) throw err;
});

/**** Function to extract news headline, timestamp, and news article link *****/

// Parsing data on the first page of Thomson Reuters using cheerio //
let getData = html => {
  data = [];
  const $ = cheerio.load(html);
  const nightmare = Nightmare({ show: true })

  let company_name = $('div.search-stock-ticker a').text();

  $('div.search-result-indiv').each((i, elem) => {
    let text = $(elem).find('div.search-result-content h3.search-result-title a').text();
    let domain_name = "https://www.reuters.com"
    let article_link = domain_name + ($(elem).find('div.search-result-content h3.search-result-title a').attr('href'));
    let time_stamp = $(elem).find('div.search-result-content h5.search-result-timestamp').text();

    //Push the scraped data to console
    data.push({
      company: company_name,
      news: text,
      article: article_link,
      date: time_stamp
    });
  });

  //Write data into a JSON file
  let data_to_write = JSON.stringify(data, null, 2);
  fs.appendFileSync('headlines_' + company_name + '.json', data_to_write);
};

/**** Main function to navigate to Thomson Reuters page and call functions to fetch data *****/

// Initialize the nightmare and set the show property true to monitor what the browser's execution
function* run() {
  const list_of_companies = ["Tesla","Apple","AMD", "Disney"];
  const nightmare = Nightmare({ show: false });

  var loadmore_exists = false;
  var data = [];
  var news_body_link;
  var news_body;
  var url;

  for (let company_name of list_of_companies) {
    url = 'https://www.reuters.com/search/news?blob=' + company_name + '&sortBy=date&dateRange=all';

    //Request making through nightmare
    yield nightmare
      .goto(url)
      .wait('body');

    //Check if 'Load More Results' button exists and click untill its existance
    loadmore_exists = yield nightmare.visible('div.search-result-more-txt');
    var i = 0;
    while (loadmore_exists && i < 10000) {
      i++;

      yield nightmare
        .click('div.search-result-more-txt')
        .wait('body')

      loadmore_exists = yield nightmare.visible('div.search-result-more-txt');
    }

    //Logic to call getData function for the loaded HTML page
    yield nightmare
      .evaluate(() => document.querySelector('body').innerHTML)
      .then(response => {
        console.log(i);
        console.log(url);
        getData(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
  yield nightmare.end()
}