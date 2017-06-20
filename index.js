const { bot, botan } = require('./config');

//Command
bot.onText(/\/start/, message => {
  const chatId = message.chat.id;

  bot.sendMessage(chatId, 'Hey, I`m ready to start!');
  botan.track(message, '/start');
});

//Keyboard
bot.onText(/\/keyboard/, message => {
  const chatId = message.chat.id;

  const opts = {
    reply_markup: {
      keyboard: [
        ['🚲 Bike', '🚗 Car']
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  };


  bot.sendMessage(chatId, 'Select a transport', opts);
  botan.track(message, '/keyboard');
});

//Inline keyboard
bot.onText(/\/inlinekeyboard/, message => {
  const chatId = message.chat.id;

  const opts = {
    reply_markup: {
      inline_keyboard: [[
          { text: '✅ Like', callback_data: 'Yay' },
          { text: '❌ Dislike', callback_data: 'Nah' }
        ]]
    }
  };

  bot.sendMessage(chatId, 'Random question ?', opts);
  botan.track(message, '/inline keyboard');
});

bot.on('callback_query', message => {
  const msg = message.message;
  const answer = message.data;

  bot.sendMessage(msg.chat.id, answer);
});

//Any message
bot.on('message', message => {
  const chatId = message.chat.id;

  botan.track(message, 'message');
});
