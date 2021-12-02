const { bot } = require("../bot");
const { LanguageKeyboard, MenuKeyboard } = require("../inline_keyboards");
const { menuService } = require("../services");
const { clientService } = require("../services/client/ClientService");

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
  const clientController = strapi.controllers.clients;
  const clientFromDb = await clientService.getByChatId(
    chatId,
    clientController
  );
  if (clientFromDb) {
    const menuController = strapi.controllers.menus;
    const menus = await menuService.findByLocale(
      clientFromDb.language,
      menuController
    );
    const keyboard = MenuKeyboard(menus);
    return ctx.reply("menu", keyboard);
  }
  try {
    await clientService.create(newClient, clientController);
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
