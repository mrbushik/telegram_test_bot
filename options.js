module.exports = {
  infoOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Основной канал 😍", callback_data: "1" }],
        [{ text: "Приват канал 🔞", callback_data: "2" }],
        [{ text: "Контент с Boosty ⚡", callback_data: "3" }],
      ],
    }),
  },

  payOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Оплатить", callback_data: "pay" }],
        [{ text: "Назад", callback_data: "back" }],
      ],
    }),
  },

  paymentMethods: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Карта", callback_data: "card" }],
        [{ text: "ЮMoney", callback_data: "yooMoney" }],
      ],
    }),
  },
};
