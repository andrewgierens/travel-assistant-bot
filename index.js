const Telegraf = require('telegraf')

const bot = new Telegraf('');

bot.start((ctx) => ctx.reply('Welcome!'));

bot.startPolling();