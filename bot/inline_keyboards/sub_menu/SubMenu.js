const { Markup } = require("telegraf");
const { Back } = require("../../constants");

const SubMenuCallbacks = {
  subMenu: "sub_menu_pick",
  back: "sub_menu_back",
};
const SubMenuKeyboard = (subMenus = [], locale, mainMenuId) => {
  const keyboard = subMenus.map((menu) => [
    Markup.button.callback(
      menu.name || "",
      `${SubMenuCallbacks.subMenu}_${menu.id}_${mainMenuId}`
    ),
  ]);
  keyboard.push([
    Markup.button.callback(Back[locale] || Back.uz, SubMenuCallbacks.back),
  ]);
  return Markup.inlineKeyboard(keyboard);
};

module.exports = {
  SubMenuKeyboard,
  SubMenuCallbacks,
};
