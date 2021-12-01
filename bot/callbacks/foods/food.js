const { bot } = require("../../bot");
const { BASE_URL } = require("../../constants");
const {
  FoodsKeyboardCallbacks,
} = require("../../inline_keyboards/foods/Foods");
const { foodService } = require("../../services");

const regExp = new RegExp(FoodsKeyboardCallbacks.food);
bot.action(regExp, async (ctx) => {
  const foodId = ctx.match.input.replace(`${FoodsKeyboardCallbacks.food}_`, "");
  const foodController = strapi.controllers.foods;
  const foodFromDb = await foodService.findById(foodId, foodController);
  ctx.replyWithMediaGroup([
    {
      media:
        "https://images.pexels.com/photos/10339367/pexels-photo-10339367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      caption: foodFromDb.name,
      type: "photo",
    },
    // {
    //   media: "./test.jpg",
    //   caption: foodFromDb.name,
    //   type: "photo",
    // },
  ]);
});
