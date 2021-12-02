const { bot } = require("../../bot");
const { LANGUAGES } = require("../../constants");
const { SubMenuKeyboard } = require("../../inline_keyboards/sub_menu/SubMenu");
const { menuService } = require("../../services");

bot.action(/^menu_/, async (ctx) => {
  const menuId = ctx.match.input.replace("menu_", "");
  const menuController = strapi.controllers.menus;
  const menuFromDb = await menuService.findById(menuId, menuController);
  const keyboard = SubMenuKeyboard(
    menuFromDb.sub_menus,
    menuFromDb.locale,
    menuId
  );
  ctx.editMessageText("Sub menu", keyboard);
});
