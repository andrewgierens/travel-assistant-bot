const Telegraf = require('telegraf')
const moment = require('moment-timezone');
const cityTimezones = require('city-timezones');

const bot = new Telegraf(process.env.TRAVEL_BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.command('time', (ctx) => {
  var cityName = ctx.message.text.replace('/time ', '');
  const cityLookup = cityTimezones.lookupViaCity(cityName)[0];
  ctx.reply(moment().tz(cityLookup.timezone).format('MMMM Do YYYY, h:mm:ss a'));
});

bot.startPolling();