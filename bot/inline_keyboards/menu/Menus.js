const { Markup } = require("telegraf");

const MenuKeyboard = (menus = []) => {
  const keyboard = menus.map((menu) => [
    Markup.button.callback(menu.name, `menu_${menu.id}`),
  ]);
  return Markup.inlineKeyboard(keyboard);
};

module.exports = {
  MenuKeyboard,
};
