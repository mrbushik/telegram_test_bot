const telegramApi = require("node-telegram-bot-api");
const token = "5807859315:AAFzgk8CktHHITLqcThveapFITsMZRuJGWU";
const bot = new telegramApi(token, { polling: true });
const infoOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "канал", callback_data: "1" }],
      [{ text: "приват канал", callback_data: "2" }],
      [{ text: "Контент с Boosty", callback_data: "3" }],
      //   [
      //     { text: "7", callback_data: "7" },
      //     { text: "8", callback_data: "8" },
      //     { text: "9", callback_data: "9" },
      //   ],
      //   [{ text: "0", callback_data: "0" }],
    ],
  }),
};

const payOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "оплатить", callback_data: "pay" }],
      [{ text: "назад", callback_data: "back" }],
    ],
  }),
};

const paymentMethods = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "карта", callback_data: "card" }],
      [{ text: "ЮMoney", callback_data: "yooMoney" }],
    ],
  }),
};

const mainMenu = (chatId) =>
  bot.sendMessage(chatId, "выберите нужный пункт", infoOptions);

const start = () => {
  bot.setMyCommands([
    { command: " /menu", description: "меню" },
    { command: " /social", description: "мои соц сети" },
  ]);
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/social") {
      return bot.sendMessage(chatId, `вот мои соц сети ...`);
    }
    if (text === "/menu") {
      await bot.sendMessage(chatId, `что конкретно вы хотите увидеть ?`);
      return mainMenu(chatId);
      // return bot.sendMessage(chatId, "выберите нужный пункт", infoOptions);
    }
    return bot.sendMessage(chatId, "я не нашел такой команды");
  });

  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data === "1") {
      await bot.sendPhoto(
        chatId,
        "https://res.cloudinary.com/drfjcq9hg/image/upload/v1664522009/cld-sample-3.jpg"
      );
      return bot.sendMessage(
        chatId,
        `Тут ты найдешь много подобного контента бесплатно`
      );
    }
    if (data === "2") {
      await bot.sendPhoto(
        chatId,
        "https://res.cloudinary.com/drfjcq9hg/image/upload/v1664522009/cld-sample-2.jpg"
      );
      return bot.sendMessage(
        chatId,
        `более интереснй контетн без блюра, стоимость канала 900Р`,
        payOptions
      );
    }
    if (data === "3") {
      return bot.sendMessage(
        chatId,
        `оформи подписку на мой бусти по этой ссылке ...`
      );
    }

    if (data === "pay") {
      return bot.sendMessage(
        chatId,
        "выбери удобный для тебя метод оплаты",
        paymentMethods
      );
    }
    if (data === "back") {
      return mainMenu(chatId);
    }

    return;
    // bot.sendMessage(chatId, `ты выбрал ${data}`);
  });
};

start();
