const moment = require('moment-timezone');
const cityTimezones = require('city-timezones');

class TimeProvider {
  static getTimeFromCity(cityName) {
    const cityLookup = cityTimezones.lookupViaCity(cityName)[0];
    return moment().tz(cityLookup.timezone).format('MMMM Do YYYY, h:mm:ss a');
  }
}

module.exports = TimeProvider;