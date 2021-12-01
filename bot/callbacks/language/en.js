const { bot } = require("../../bot");
const { LANGUAGES } = require("../../constants");
const { LanguageCallbacks, MenuKeyboard } = require("../../inline_keyboards");
const { clientService, menuService } = require("../../services");

bot.action(LanguageCallbacks.en, async (ctx) => {
  const chatId = ctx.from.id;
  const clientController = strapi.controllers.clients;
  try {
    const client = await clientService.getByChatId(chatId, clientController);
    await clientService.setLanguage(client, LANGUAGES.EN, clientController);
  } catch (e) {
    console.error(e);
  }
  ctx.editMessageText("You have picked English language");
  try {
    const menuController = strapi.controllers.menus;
    const menus = await menuService.findByLocale(LANGUAGES.EN, menuController);
    const menuKeyboard = MenuKeyboard(menus);
    ctx.reply("Menyu", menuKeyboard);
  } catch (e) {
    console.error(e);
  }
});
