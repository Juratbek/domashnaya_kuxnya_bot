const { bot } = require("../../bot");
const { LANGUAGES } = require("../../constants");
const { LanguageCallbacks, MenuKeyboard } = require("../../inline_keyboards");
const { clientService, menuService } = require("../../services");

bot.action(LanguageCallbacks.ru, async (ctx) => {
  const chatId = ctx.from.id;
  const clientController = strapi.controllers.clients;
  try {
    const client = await clientService.getByChatId(chatId, clientController);
    await clientService.setLanguage(client, LANGUAGES.RU, clientController);
  } catch (e) {
    console.error(e);
  }
  ctx.editMessageText("Вы выбрали русский язык");
  try {
    const menuController = strapi.controllers.menus;
    const menus = await menuService.findByLocale(LANGUAGES.RU, menuController);
    const menuKeyboard = MenuKeyboard(menus);
    ctx.reply("Menyu", menuKeyboard);
  } catch (e) {
    console.error(e);
  }
});
