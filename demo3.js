process.env["NTBA_FIX_319"] = 1;
var TelegramBot = require('node-telegram-bot-api');
//url = "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg"
var token = "549599975:AAFW05c-idVTxaoXXK9yzQMMyXMHY7fK7Hw";
const bot = new TelegramBot(token, {
  polling: true
});


function news_api2(cate,msg) {
console.log('in function');
console.log(cate);


//bot.sendMessage(msg.chat.id,cate.articles[0])





}

module.exports.news_api2 = news_api2
