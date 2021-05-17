const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api
const config = require('./config');

const token = config.tgToken; // тут токен кторый мы получили от botFather

// включаем самого обота
const bot = new TelegramBot(config.tgToken, {polling: true});

//конфиг клавиатуры
const keyboard = [
    [
        {
          text: 'Tinder',
          url: config.URL//внешняя ссылка
        }
    ]
  ];

// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

  // отправляем сообщение
  bot.sendMessage(chatId, 'твой личный клиент готов', { // прикрутим клаву
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

