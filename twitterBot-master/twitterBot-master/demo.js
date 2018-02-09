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
bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome");

});
bot.on('message', (msg) => {
  console.log(msg);
 switch (msg.text.toString()) {
   case 'hi':
   case 'hello':
   bot.sendMessage(msg.chat.id, "http://www.ibtimes.co.in/lg-v30s-256gb-rom-coming-ahead-flagship-lg-g7-what-we-know-so-far-760072");

      break;
   case 'Technology':
   case 'technology':
   bot.sendMessage(msg.chat.id, 'Ok , we will get you the latest news');

     break;

   case 'Science':
   case 'science':
   bot.sendMessage(msg.chat.id, 'Ok , we will get you the latest news');

     break;

   case 'Entertainment':
   case 'entertainment':

   bot.sendMessage(msg.chat.id, 'Ok , we will get you the latest news');

     break;

   case 'Sports':
   case 'sports':

    bot.sendMessage(msg.chat.id, 'Ok , we will get you the latest news');

     break;

   default:
   //console.log(msg.text)
   bot.sendMessage(msg.chat.id, msg.text);
   break;

 }

keyboard(msg)
})

function keyboard(msg) {

  bot.sendMessage(msg.chat.id,'click for latest news',
  {
    reply_markup: {
      keyboard: [["Technology","Science"],["Entertainment","Sports"]]
     }

    }
  )
}

bot.on("inline_query",(query)=>{
  //console.log(query.query)
  if(query.query === "technology"){
  bot.answerInlineQuery(query.id, [
      {
      type: "photo",
      id: "bot article",
      photo_url: "https://s3.amazonaws.com/ngccoin-production/coin-grading-guide/Small-Size-Capped-Bust-Quarters-Reverse.jpg",
      thumb_url: "https://s3.amazonaws.com/ngccoin-production/coin-grading-guide/Small-Size-Capped-Bust-Quarters-Reverse.jpg",
      photo_width:10,
      photo_height:10,
      title: "latest news",
      description: "latest news bot",
      caption:"hello whatsup"
      /*input_message_content: {
        message_text: "<b>news</b><i>latest</i><a href='http://www.example.com/'>inline URL</a>",
        parse_mode: 'HTML',
        disable_web_page_preview: false
      }*/
    }
  ]
  //,(form)=>{console.log(form.results)}
);

}
})
