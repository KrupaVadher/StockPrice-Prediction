/***** Code to fetch News Body *****/

//Nightmare declaration and defination
const Nightmare = require('nightmare');
const cheerio = require('cheerio');
const vo = require('vo');
const fs = require('fs');

vo(run)(function (err, result) {
  if (err) throw err;
});

/**** Function to get entire news article body with cheerio *****/

let news_bodyExtract = html => {
  news_body = "";
  const $ = cheerio.load(html);

  if ($('div.StandardArticleBody_body p').length) {
    $('div.StandardArticleBody_body p').each((i, elem) => {
      let text = $(elem).text();

      news_body += text + "\n";
    });
  }
  else {
    let text = $('div.StandardArticleBody_body pre').text();
    news_body += text + "\n";
  }

  return news_body;
};

/**** Main function to navigate to every link stored in the headlines.json file *****/

// Initialize the nightmare and set the show property true, so we can monitor what the browser is doing on execution
function* run() {

  const list_of_companies = ["Tesla Inc (TSLA.OQ)", "Apple Inc (AAPL.OQ)", "Advanced Micro Devices Inc (AMD.OQ)", "Walt Disney Co (DIS.N)"];

  for (let company_name of list_of_companies) {

    //Read headlines.json file synchronously
    let jsonData = JSON.parse(fs.readFileSync('headlines_' + company_name + '.json'));

    var article_link;
    var links_collection = [];
    var body_data = [];

    //Store all news article links in an array 'links_collection'
    for (article_link in jsonData) {
      links_collection.push(jsonData[article_link].article);
    }
    // console.log(links_collection.length);

    //Navigate to the links stored in an array 'links_collection' and call news_bodyExtract function to retrieve news body data

    // var i=0;
    fs.appendFileSync('body_' + company_name + '.json', '[\n');

    for (let link of links_collection) {
      const nightmare = Nightmare({ show: false })

      yield nightmare
        .goto(link)
        .wait('body')
        .evaluate(() => document.querySelector('body').innerHTML)
        .then(response => {
          //Call news_bodyExtract function
          var returned_body = news_bodyExtract(response);
          //Store retrieved data in a link, body format
          var data_to_write = {
            link: link,
            body: returned_body
          };
          //Write data into a JSON file
          let string_to_write = JSON.stringify(data_to_write, null, 2);
          string_to_write = string_to_write.concat(',\n');
          fs.appendFileSync('body_' + company_name + '.json', string_to_write);
        }).catch(err => {
          console.log(err);
        })
      yield nightmare.end()

      // if(i>5){break;}
      // i++;
    }
    fs.appendFileSync('body_' + company_name + '.json', ']\n');
  }
}


