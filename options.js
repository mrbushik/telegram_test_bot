module.exports = {
  infoOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Резюме 📃", callback_data: "resume" }],
        [{ text: "Пример работ 📱‍", callback_data: "example" }],
        [{ text: "Контент с Boosty ⚡", callback_data: "3" }],
      ],
    }),
  },

  exampleOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Далее", callback_data: "2card" }],
        [{ text: "Назад", callback_data: "back" }],
      ],
    }),
  },

  paymentMethods: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Назад", callback_data: "card" }],
        [{ text: "ЮMoney", callback_data: "yooMoney" }],
      ],
    }),
  },
};
