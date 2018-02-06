process.env["NTBA_FIX_319"] = 1;
const TOKEN = "549599975:AAFW05c-idVTxaoXXK9yzQMMyXMHY7fK7Hw";
const url = 'https://mycrazybot.localtunnel.me';
const port = '8080';

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

const bot = new TelegramBot(TOKEN);

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9973512c1f434c67b1a47b7d2fcc47eb');
var news = [];
var title = [];
var urln = [];
var url_image = [];
var desc = [];

// This informs the Telegram servers of the new webhook.
bot.setWebHook(`${url}/bot${TOKEN}`);

const app = express();

// parse the updates to JSON
app.use(bodyParser.json());

//updates at the route below!
app.post(`/bot${TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
  console.log(req.body)
  bot.on("inline_query",(query)=>{
    //console.log(query.query)
    if(query.query === "news"){
    bot.answerInlineQuery(query.id, [
      {
        type: "photo",
        id: "testarticle",
        photo_url: "http://cdn.akamai.steamstatic.com/steam/apps/214250/header.jpg?t=1447355998",
        thumb_url: "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg",
        photo_width:10,
        photo_height:10,
        title: "latest news",
        description: "latest news bot",
        input_message_content: {
          message_text: "<b>bold</b><i>italic</i><a href='http://www.example.com/'>inline URL</a>",
          parse_mode: 'HTML',
          disable_web_page_preview: false
        }
      }
    ]
    //,(form)=>{console.log(form.results)}
  );

}
  })
});

// Just to ping!
bot.on('message', (msg) => {
  if (msg.text.toString() === 'hello') {
    bot.sendMessage(msg.chat.id, 'hello ' + msg.chat.first_name + ' ' + msg.chat.last_name);

    var options = {
                reply_markup: JSON.stringify({
                  inline_keyboard: [
                    [{
                      text: 'go to web',
                      url: "https://google.com"
                      //callback_data:'1'
                    }]
                  ]
                })
    }
  //  bot.sendMessage(msg.chat.id,'use this',options)
  newsapi.v2.topHeadlines({
    //sources: 'bbc-news',
    //  q: '',
    category: 'technology',
    language: 'en',
    country: 'us'
  }).then(response => {

    //console.log(response);
    for (i = 0; i < 5; i++) {
      title[i] = response.articles[i].title,
        urln[i] = response.articles[i].url,
        url_image[i] = response.articles[i].urlToImage,
        desc[i] = response.articles[i].description
      }
    //console.log(title);
    //console.log(urln);
    //console.log(url_image[0]);
    for(i=0;i<5;i++){
    bot.sendMessage(msg.chat.id,'<b>'+title[i]+'</b>\n',{parse_mode: 'HTML'})
    bot.sendPhoto(msg.chat.id,url_image[i],/*{caption: 'insane'}*/options)
    bot.sendMessage(msg.chat.id,'<i>'+desc[i]+'</i>\n',{parse_mode: 'HTML'})
    //bot.sendMessage(msg.chat.id,'<a href='+urln[0]+'>go to web</a>\n',{parse_mode: 'HTML'})
  }
})
}
});

bot.on('callback_query',(query)=>{
  console.log('in call back')
  console.log(query)
  bot.answerCallbackQuery(query.id,"you have click",{
    show_alert: true,
    url: 'https://www.google.com'
  })
})

// Start Express Server

app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});
