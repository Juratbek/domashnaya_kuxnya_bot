const { bot } = require("../../bot");
const {
  FoodsKeyboardCallbacks,
  FoodsKeyboard,
} = require("../../inline_keyboards/foods/Foods");
const { foodService } = require("../../services");

const regExp = new RegExp(FoodsKeyboardCallbacks.food);
bot.action(regExp, async (ctx) => {
  const [foodId, mainMenuId] = ctx.match.input
    .replace(`${FoodsKeyboardCallbacks.food}_`, "")
    .split("_");
  const foodController = strapi.controllers.foods;
  const foodFromDb = await foodService.findById(foodId, foodController);
  const caption = `${foodFromDb.name}\n${foodFromDb.cost}\n${foodFromDb.information}`;
  await ctx.replyWithMediaGroup([
    {
      media: "https://www.pexels.com/photo/cooked-food-704569/",
      caption,
      type: "photo",
    },
  ]);
  const subMenuController = strapi.controllers["sub-menus"];
  const foods = await foodService.getFoodsListBySubMenuId(
    foodFromDb.sub_menu.id,
    subMenuController
  );
  const keyboard = FoodsKeyboard(foods, foodFromDb.locale, mainMenuId);
  ctx.reply("ovqatni tanlang", keyboard);
});
