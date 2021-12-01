const { bot } = require("../../bot");
const { LANGUAGES } = require("../../constants");
const { LanguageCallbacks, MenuKeyboard } = require("../../inline_keyboards");
const { menuService, clientService } = require("../../services");

bot.action(LanguageCallbacks.uz, async (ctx) => {
  const chatId = ctx.from.id;
  const clientController = strapi.controllers.clients;
  try {
    const client = await clientService.getByChatId(chatId, clientController);
    await clientService.setLanguage(client, LANGUAGES.UZ, clientController);
  } catch (e) {
    console.error(e);
  }
  ctx.editMessageText("Siz o`zbek tilini tanladingiz");
  try {
    const menuController = strapi.controllers.menus;
    const menus = await menuService.findByLocale(LANGUAGES.UZ, menuController);
    const menuKeyboard = MenuKeyboard(menus);
    ctx.reply("Menyu", menuKeyboard);
  } catch (e) {
    console.error(e);
  }
});
