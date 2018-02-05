process.env["NTBA_FIX_319"] = 1;
const TOKEN = "549599975:AAFW05c-idVTxaoXXK9yzQMMyXMHY7fK7Hw";
const url = 'https://mycruelbot.localtunnel.me';
const port = '8080';

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

const bot = new TelegramBot(TOKEN);

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
});

// Start Express Server
app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});

// Just to ping!
bot.on('message', (msg) => {
  if(msg.text.toString()=== 'hello'){
  bot.sendMessage(msg.chat.id,'hello '+msg.chat.first_name+' '+msg.chat.last_name);
  bot.sendPhoto(msg.chat.id, 'http://cdn.akamai.steamstatic.com/steam/apps/214250/header.jpg?t=1447355998',{caption:'insane'})
}
});
