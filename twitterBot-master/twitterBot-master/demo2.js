const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9973512c1f434c67b1a47b7d2fcc47eb');
var news = [];
var title = [];
var urln = [];
var url_image = [];
var desc = [];
newsapi.v2.topHeadlines({
  //sources: 'bbc-news',
  //  q: '',
  category: 'technology',
  language: 'en',
  country: 'in'
}).then(response => {

  //console.log(response);
  for (i = 0; i < 5; i++) {
    title[i] = response.articles[i].title,
      urln[i] = response.articles[i].url,
      url_image[i] = response.articles[i].urlToImage
      desc[i] = response.articles[i].description
  }

  console.log(title);
  console.log(urln);
  console.log(url_image);
  console.log(desc)
})
