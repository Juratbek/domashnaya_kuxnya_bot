const { bot } = require("../../bot");
const { MenuKeyboard } = require("../../inline_keyboards/menu/Menus");
const { SubMenuCallbacks } = require("../../inline_keyboards/sub_menu/SubMenu");
const { menuService, clientService } = require("../../services");

bot.action(SubMenuCallbacks.back, async (ctx) => {
  const clientTelegramId = ctx.from.id;
  const clientController = strapi.controllers.clients;
  const currentClient = await clientService.getByChatId(
    clientTelegramId,
    clientController
  );
  const menuController = strapi.controllers.menus;
  const menus = await menuService.findByLocale(
    currentClient.language,
    menuController
  );
  const keyboard = MenuKeyboard(menus);
  ctx.editMessageText("menu", keyboard);
});
