const { bot } = require("../bot");
const { LanguageKeyboard } = require("../inline_keyboards");

bot.start(async (ctx) => {
  const message = ctx.message;
  const firstName = message.from.first_name;
  const username = message.from.username;
  const chatId = message.chat.id;
  const newClient = {
    first_name: firstName,
    user_name: username,
    chat_id: chatId,
  };
  try {
    const res = await strapi.controllers.clients.create(newClient);
    ctx.reply(
      `Assalamu aleykum ${firstName}. Tilni tanlash uchun quidagilardan birini bosing\n
      Привет ${firstName}. Нажмите один из следующих вариантов, чтобы выбрать язык.\n
      Hi ${firstName}. Click one of the buttons in order to pick the language.`,
      LanguageKeyboard
    );
  } catch (e) {
    console.error(e);
  }
});
