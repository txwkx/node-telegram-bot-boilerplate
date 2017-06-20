const TelegramBot = require('node-telegram-bot-api');

// Telegram bot TOKEN from BotFather
const TOKEN = process.env.TOKEN || 'INSERT_BOT_TOKEN';

// Heroku Config Vars
const url = process.env.APP_URL;
const port = process.env.PORT || 443;
const metrics = process.env.METRICS;

// Init Botanio
const botan = require('botanio')(metrics);

let bot;
if (process.env.NODE_ENV === 'dev') {

  bot = new TelegramBot(TOKEN, {
    polling: true
  });

} else {

  bot = new TelegramBot(TOKEN, {
    webHook: {
      port: port
    }
  });

  bot.setWebHook(`${url}/bot${TOKEN}`);

}

module.exports = {
  bot: bot,
  botan: botan
};
