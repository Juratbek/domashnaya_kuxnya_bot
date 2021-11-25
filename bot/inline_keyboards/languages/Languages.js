const { Markup } = require("telegraf");

const LanguageCallbacks = {
  en: "en",
  ru: "ru",
  uz: "uz",
};

const LanguageKeyboard = Markup.inlineKeyboard([
  Markup.button.callback("English", LanguageCallbacks.en),
  Markup.button.callback("O`zbek", LanguageCallbacks.uz),
  Markup.button.callback("Русский", LanguageCallbacks.ru),
]);

module.exports = {
  LanguageKeyboard,
  LanguageCallbacks,
};
