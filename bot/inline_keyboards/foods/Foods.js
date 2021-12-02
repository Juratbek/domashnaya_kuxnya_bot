const { Markup } = require("telegraf");
const { Back } = require("../../constants");

const FoodsKeyboardCallbacks = {
  food: "food_pick",
  back: "food_back",
};

const FoodsKeyboard = (foods = [], locale, mainMenuId) => {
  const keyboard = foods.map((food) => [
    Markup.button.callback(
      food.name || "",
      `${FoodsKeyboardCallbacks.food}_${food.id}_${mainMenuId}`
    ),
  ]);
  keyboard.push([
    Markup.button.callback(
      Back[locale] || Back.uz,
      `${FoodsKeyboardCallbacks.back}_${mainMenuId}`
    ),
  ]);
  return Markup.inlineKeyboard(keyboard);
};

module.exports = {
  FoodsKeyboard,
  FoodsKeyboardCallbacks,
};
