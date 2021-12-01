const { Markup } = require("telegraf");
const { Back, LANGUAGES } = require("../../constants");

const FoodsKeyboardCallbacks = {
  food: "food",
  back: "food_back",
};

const FoodsKeyboard = (foods = [], locale) => {
  const keyboard = foods.map((food) => [
    Markup.button.callback(
      food.name || "",
      `${FoodsKeyboardCallbacks.food}_${food.id}`
    ),
  ]);
  keyboard.push([
    Markup.button.callback(
      Back[locale] || LANGUAGES.UZ,
      FoodsKeyboardCallbacks.back
    ),
  ]);
  return Markup.inlineKeyboard(keyboard);
};

module.exports = {
  FoodsKeyboard,
  FoodsKeyboardCallbacks,
};
