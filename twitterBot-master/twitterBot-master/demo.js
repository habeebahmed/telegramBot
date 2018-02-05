process.env["NTBA_FIX_319"] = 1;
var TelegramBot = require('node-telegram-bot-api');
//url = "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg"
var token = "549599975:AAFW05c-idVTxaoXXK9yzQMMyXMHY7fK7Hw";
const bot = new TelegramBot(token, {
  polling: true
});

/*bot.on("text", (message) => {
  bot.sendMessage(message.chat.id, "Hello world");
});*/
bot.on('message', (msg) => {
 if (msg.text.toString() === 'hello' ) {

   bot.sendMessage(msg.chat.id, "this is cool bot at your service");
   bot.sendPhoto(msg.chat.id, 'https://www.gettyimages.com/gi-resources/images/frontdoor/creative/LonelyPlanetRM/Slide_2.jpg');
 } else if(msg.text.toString() === 'news') {
bot.sendMessage(msg.chat.id, 'Ok , we will get you the latest news');
}
bot.sendMessage(msg.chat.id,'click for latest news',
{
  reply_markup: {
    keyboard: [["news"]]
   }

  }
)

});
