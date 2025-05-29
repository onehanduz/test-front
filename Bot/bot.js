const { Telegraf } = require("telegraf");
const TOKEN = "7819436423:AAH75GlPPVDeCQyk90t7ci5pn24Ie6wclo8";
const bot = new Telegraf(TOKEN);

const web_link = "https://phenomenal-dolphin-b504e0.netlify.app/";
bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  }),
);
bot.on("web_app_data", async (ctx) => {
  try {
    const data = ctx.webAppData?.data.json();
    console.log("Received web app data:", data);
    await ctx.reply(`Received data: ${JSON.stringify(data)}`);
  } catch (error) {
    console.error("Error handling web_app_data:", error);
    await ctx.reply("Failed to process web app data.");
  }
});
bot.launch();
