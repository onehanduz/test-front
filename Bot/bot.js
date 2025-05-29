const { Telegraf } = require("telegraf");
const TOKEN = "7819436423:AAH75GlPPVDeCQyk90t7ci5pn24Ie6wclo8";
const bot = new Telegraf(TOKEN);

const web_link =
  "https://6835b3b6772f1e0008e2af80--phenomenal-dolphin-b504e0.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  }),
);

bot.launch();
