const { bot } = require("../bot");
const { LanguageKeyboard } = require("../inline_keyboards");

bot.start((ctx) => {
  try {
    const res = strapi.controllers.article.count();
    console.log("🚀 ~ file: start.js ~ line 7 ~ bot.start ~ res", res);
    // console.log(
    //   "🚀 ~ file: start.js ~ line 6 ~ bot.start ~ res",
    //   strapi.controllers.article
    // );
  } catch (e) {
    console.log(e);
  }
  ctx.reply("Quidagilardan birini tanlang", LanguageKeyboard);
});
