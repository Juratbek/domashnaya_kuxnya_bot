const { Markup } = require("telegraf");
const { Back, LANGUAGES } = require("../../constants");

const SubMenuCallbacks = {
  subMenu: "sub_menu",
  back: "sub_menu_back",
};
const SubMenuKeyboard = (subMenus = [], locale) => {
  const keyboard = subMenus.map((menu) => [
    Markup.button.callback(
      menu.name || "",
      `${SubMenuCallbacks.subMenu}_${menu.id}`
    ),
  ]);
  keyboard.push([
    Markup.button.callback(Back[locale] || LANGUAGES.UZ, SubMenuCallbacks.back),
  ]);
  return Markup.inlineKeyboard(keyboard);
};

module.exports = {
  SubMenuKeyboard,
  SubMenuCallbacks,
};
