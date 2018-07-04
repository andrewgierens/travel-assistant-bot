const Telegraf = require('telegraf')

const TimeProvider = require('./providers/time-provider');

const bot = new Telegraf(process.env.TRAVEL_BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.command('time', (ctx) => {
  var cityName = ctx.message.text.replace('/time ', '');
  ctx.reply(TimeProvider.getTimeFromCity(cityName));
});

bot.startPolling();