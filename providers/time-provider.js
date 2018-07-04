const moment = require('moment-timezone');
const cityTimezones = require('city-timezones');
const Markup = require('telegraf/markup')

class TimeProvider {
  static getTimeFromCity(cityName) {
    const cityLookup = cityTimezones.lookupViaCity(cityName)[0];
    if (cityLookup == null) return null;

    return moment().tz(cityLookup.timezone).format('h:mm:ss a');
  }

  static getFormattedTimeFromCity(cityName) {
    const cityLookup = cityTimezones.lookupViaCity(cityName)[0];
    if (cityLookup == null) return null;
    
    const time = moment().tz(cityLookup.timezone).format('h:mm:ss a');
    return `The time in *${cityLookup.city}, ${cityLookup.country}* is: ${time}`;
  }
}

module.exports = TimeProvider;