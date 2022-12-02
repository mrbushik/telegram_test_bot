const { infoOptions, paymentMethods, payOptions } = require("./options");
const telegramApi = require("node-telegram-bot-api");
const token = "5807859315:AAFzgk8CktHHITLqcThveapFITsMZRuJGWU";
const bot = new telegramApi(token, { polling: true });

const mainMenu = (chatId) =>
  bot.sendMessage(
    chatId,
    "Тут ты можешь насладится моим контентом 💕\nпросто выбери где ты хочешь на меня посмотреть",
    infoOptions
  );

const start = () => {
  bot.setMyCommands([
    { command: " /start", description: "Главное меню" },
    { command: " /social", description: "Мои соц сети" },
  ]);
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/social") {
      return bot.sendMessage(chatId, `Вот мои соц сети ...`);
    }
    if (text === "/start") {
      return mainMenu(chatId);
    }
    return bot.sendMessage(chatId, "Я не нашел такой команды");
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
        `Более интереснй контент без блюра, стоимость канала 900Р`,
        payOptions
      );
    }
    if (data === "3") {
      return bot.sendMessage(
        chatId,
        `Оформи подписку на мой бусти по этой ссылке ...`
      );
    }

    if (data === "pay") {
      return bot.sendMessage(
        chatId,
        "Выбери удобный для тебя метод оплаты",
        paymentMethods
      );
    }
    if (data === "back") {
      return mainMenu(chatId);
    }

    if (data === "card") {
      return bot.sendMessage(
        chatId,
        `Стоимость приват канала 900Р. Номер карты для оплыты 4010 2020 2020 2020, после оплыты для получения доспупа к каналу вышлите скрин сюда @bushikov`
      );
    }
    if (data === "yooMoney") {
      return bot.sendMessage(
        chatId,
        "Стоимость приват канала 900Р. Номер кошелька для оплыты 4010 2020 2020 2020, после оплыты для получения доспупа к каналу вышлите скрин сюда @bushikov"
      );
    }

    return;
  });
};

start();
