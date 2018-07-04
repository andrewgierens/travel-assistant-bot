const Telegraf = require('telegraf');
const commandParts = require('telegraf-command-parts');

const TimeProvider = require('./providers/time-provider');

const bot = new Telegraf(process.env.TRAVEL_BOT_TOKEN);
bot.use(commandParts());
bot.command('time', (ctx) => {
  const commandArgs = ctx.state.command.splitArgs;
  if (!commandArgs || commandArgs.length === 0 || (commandArgs.length === 1 && !commandArgs[0])) {
    ctx.reply('I\'m sorry, you need to tell me a city or country!');
    return;
  }

  if (!commandArgs || commandArgs.length > 1) {
    ctx.reply('I\'m sorry, I can only tell you the time for one city/country!');
    return;
  }

  var cityName = commandArgs[0];
  var formattedTime = TimeProvider.getFormattedTimeFromCity(cityName);
  if (!formattedTime) {
    ctx.reply('I\'m sorry, I can\'t find that city/country!');
    return;
  }

  ctx.replyWithMarkdown(formattedTime);
});

bot.startPolling();