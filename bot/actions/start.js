const { bot } = require("../bot");
const { LanguageKeyboard } = require("../inline_keyboards");

bot.start(async (ctx) => {
  ctx.reply("Quidagilardan birini tanlang", LanguageKeyboard);
});
