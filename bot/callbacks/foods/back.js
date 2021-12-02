const { bot } = require("../../bot");
const {
  FoodsKeyboardCallbacks,
} = require("../../inline_keyboards/foods/Foods");
const { SubMenuKeyboard } = require("../../inline_keyboards/sub_menu/SubMenu");
const { subMenuService } = require("../../services");

const regExp = new RegExp(FoodsKeyboardCallbacks.back);

bot.action(regExp, async (ctx) => {
  const mainMenuId = ctx.match.input.replace(
    `${FoodsKeyboardCallbacks.back}_`,
    ""
  );
  const controller = strapi.controllers.menus;
  const subMenus = await subMenuService.getSubMenusListByMainMenuId(
    mainMenuId,
    controller
  );
  const locale = subMenus[0].locale;
  ctx.editMessageText(
    "Sub menu",
    SubMenuKeyboard(subMenus, locale, mainMenuId)
  );
});
