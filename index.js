const telegramApi = require("node-telegram-bot-api");
const token = "5807859315:AAFzgk8CktHHITLqcThveapFITsMZRuJGWU";
const bot = new telegramApi(token, { polling: true });
const infoOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "канал", callback_data: "1" },
        { text: "соц сети", callback_data: "2" },
      ],
      [{ text: "контакт автора", callback_data: "3" }],
      //   [
      //     { text: "7", callback_data: "7" },
      //     { text: "8", callback_data: "8" },
      //     { text: "9", callback_data: "9" },
      //   ],
      //   [{ text: "0", callback_data: "0" }],
    ],
  }),
};
const start = () => {
  bot.setMyCommands([
    { command: " /start", description: "Начальное приветствие" },
    { command: " /info", description: "Получить информацию" },
  ]);
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.eu/_/stickers/1b5/0ab/1b50abf8-8451-40ca-be37-ffd7aa74ec4d/1.webp"
      );
      return bot.sendMessage(
        chatId,
        `здравствуйте ${msg.from.first_name} вас приветствует бот...`
      );
    }
    if (text === "/info") {
      await bot.sendMessage(chatId, `что конкретно вы хотите увидеть ?`);
      return bot.sendMessage(chatId, "выберите нужный пункт", infoOptions);
    }
    return bot.sendMessage(chatId, "я не нашел такой команды");
  });

  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    // const chatId = msg.massage.chat.id;
    // if(data === chats[chatId]){
    //   return await
    // }

    if (data === "1") {
      return bot.sendMessage(chatId, `вот ссылка на канал link>`);
    }
    if (data === "2") {
      return bot.sendMessage(chatId, `вот ссылка на соц сеть...`);
    }
    if (data === "3") {
      return bot.sendMessage(chatId, `@bushikov`);
    }

    console.log(data);
    return;
    console.log(data);
    // bot.sendMessage(chatId, `ты выбрал ${data}`);
  });
};

start();
