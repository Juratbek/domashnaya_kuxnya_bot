const { Telegraf } = require("telegraf");

const BOT_TOKEN = "2118047907:AAGwyeWH3Yil9ie4uO1KR-sob-lyAh_lja4";
const bot = new Telegraf(BOT_TOKEN);

bot.launch();

module.exports = { bot };
