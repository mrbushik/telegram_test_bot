const { infoOptions, paymentMethods, exampleOptions } = require("./options");
const telegramApi = require("node-telegram-bot-api");
const token = "5807859315:AAFzgk8CktHHITLqcThveapFITsMZRuJGWU";
const bot = new telegramApi(token, { polling: true });

const mainMenu = (chatId) =>
  bot.sendMessage(
    chatId,
    "Тут можно узнать больше обо мне👨🏻‍💻  выберите нужную кнопку",
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
      return bot.sendMessage(
        chatId,
        `Вот мои соц сети ⚡
GitHub: https://github.com/mrbushik
LinkedIn: https://www.linkedin.com/in/nikita-bushuev-4347ab237
      `
      );
    }
    if (text === "/start") {
      return mainMenu(chatId);
    }
    return bot.sendMessage(chatId, "Я не нашел такой команды");
  });

  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data === "resume") {
      return bot.sendPhoto(
        chatId,
        "https://res.cloudinary.com/drfjcq9hg/image/upload/v1670078360/bushik123/Nikita_Bushuev_Resume_page-0001_dildwy.jpg"
      );
    }
    if (data === "example") {
      return bot.sendPhoto(
        chatId,
        "https://res.cloudinary.com/drfjcq9hg/image/upload/v1670084834/bushik123/photo_5213161863309805557_y_hnlrn2.jpg",
        exampleOptions
      );
    }
    if (data === "3") {
      return bot.sendMessage(
        chatId,
        `Оформи подписку на мой бусти по этой ссылке ...`
      );
    }

    if (data === "2card") {
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
