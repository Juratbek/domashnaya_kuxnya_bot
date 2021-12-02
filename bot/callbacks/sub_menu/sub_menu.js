const { bot } = require("../../bot");
const { FoodsKeyboard } = require("../../inline_keyboards/foods/Foods");
const { SubMenuCallbacks } = require("../../inline_keyboards/sub_menu/SubMenu");
const { subMenuService } = require("../../services");

const regEx = new RegExp(SubMenuCallbacks.subMenu);

bot.action(regEx, async (ctx) => {
  const [subMenuId, mainMenuId] = ctx.match.input
    .replace(`${SubMenuCallbacks.subMenu}_`, "")
    .split("_");
  const subMenuController = strapi.controllers["sub-menus"];
  const subMenu = await subMenuService.findById(subMenuId, subMenuController);
  const keyboard = FoodsKeyboard(subMenu.foods, subMenu.locale, mainMenuId);
  ctx.editMessageText("ovqatni tanlang", keyboard);
});
