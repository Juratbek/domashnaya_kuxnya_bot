const { bot } = require("../../bot");
const { LanguageCallbacks } = require("../../inline_keyboards");

bot.action(LanguageCallbacks.en, (ctx) =>
  ctx.editMessageText("You have picked English language")
);
